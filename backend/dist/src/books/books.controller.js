var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Controller, Post, Get, Patch, Delete, Param, Body, Headers, ParseIntPipe, BadRequestException, UseInterceptors, UploadedFile, } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname, join } from 'path';
import { existsSync, unlinkSync } from 'fs';
import { BooksService } from './books.service.js';
import { CategoriesService } from '../categories/categories.service.js';
let BooksController = class BooksController {
    booksService;
    categoriesService;
    constructor(booksService, categoriesService) {
        this.booksService = booksService;
        this.categoriesService = categoriesService;
    }
    async create(userIdHeader, title, author, description, isMultiChapRaw, categoryIdRaw, categoryName) {
        if (!title)
            throw new BadRequestException('Title is required');
        const userId = parseInt(userIdHeader, 10);
        if (!userId)
            throw new BadRequestException('x-user-id header is required');
        let categoryId;
        if (categoryName) {
            const cat = await this.categoriesService.findOrCreate(categoryName);
            categoryId = cat.id;
        }
        else if (categoryIdRaw !== undefined) {
            categoryId = typeof categoryIdRaw === 'number' ? categoryIdRaw : parseInt(categoryIdRaw, 10);
        }
        const isMultiChap = typeof isMultiChapRaw === 'boolean' ? isMultiChapRaw : isMultiChapRaw === 'true';
        return this.booksService.create(userId, title, author, description, isMultiChap, categoryId);
    }
    async findAll(userIdHeader) {
        const userId = parseInt(userIdHeader, 10);
        if (!userId)
            throw new BadRequestException('x-user-id header is required');
        return this.booksService.findAll(userId);
    }
    async findOne(id) {
        return this.booksService.findOne(id);
    }
    async update(id, body) {
        return this.booksService.update(id, body);
    }
    async uploadCover(id, file) {
        if (!file)
            throw new BadRequestException('No image file provided');
        const book = await this.booksService.findOne(id);
        if (book.coverPath) {
            const oldFile = book.coverPath.replace('/thumbnails/', '');
            const oldPath = join(process.cwd(), 'thumbnails', oldFile);
            if (existsSync(oldPath))
                unlinkSync(oldPath);
        }
        const coverPath = `/thumbnails/${file.filename}`;
        return this.booksService.updateCover(id, coverPath);
    }
    async remove(id) {
        return this.booksService.remove(id);
    }
};
__decorate([
    Post(),
    __param(0, Headers('x-user-id')),
    __param(1, Body('title')),
    __param(2, Body('author')),
    __param(3, Body('description')),
    __param(4, Body('isMultiChap')),
    __param(5, Body('categoryId')),
    __param(6, Body('categoryName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, Object, Object, String]),
    __metadata("design:returntype", Promise)
], BooksController.prototype, "create", null);
__decorate([
    Get(),
    __param(0, Headers('x-user-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BooksController.prototype, "findAll", null);
__decorate([
    Get(':id'),
    __param(0, Param('id', ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BooksController.prototype, "findOne", null);
__decorate([
    Patch(':id'),
    __param(0, Param('id', ParseIntPipe)),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], BooksController.prototype, "update", null);
__decorate([
    Post(':id/cover'),
    UseInterceptors(FileInterceptor('cover', {
        storage: diskStorage({
            destination: join(process.cwd(), 'thumbnails'),
            filename: (_req, file, cb) => {
                const unique = Date.now() + '-' + Math.round(Math.random() * 1e9);
                cb(null, `cover-${unique}${extname(file.originalname)}`);
            },
        }),
        fileFilter: (_req, file, cb) => {
            if (!file.mimetype.startsWith('image/')) {
                return cb(new BadRequestException('Only image files are allowed'), false);
            }
            cb(null, true);
        },
        limits: { fileSize: 10 * 1024 * 1024 },
    })),
    __param(0, Param('id', ParseIntPipe)),
    __param(1, UploadedFile()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], BooksController.prototype, "uploadCover", null);
__decorate([
    Delete(':id'),
    __param(0, Param('id', ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BooksController.prototype, "remove", null);
BooksController = __decorate([
    Controller('books'),
    __metadata("design:paramtypes", [BooksService,
        CategoriesService])
], BooksController);
export { BooksController };
//# sourceMappingURL=books.controller.js.map