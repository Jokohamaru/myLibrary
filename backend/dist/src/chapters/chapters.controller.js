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
import { Controller, Post, Delete, Param, Body, UseInterceptors, UploadedFiles, BadRequestException, ParseIntPipe, } from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { ChaptersService } from './chapters.service.js';
import { diskStorage } from 'multer';
import { extname, join } from 'path';
import { mkdirSync } from 'fs';
function makeStorage(dest) {
    return diskStorage({
        destination: (req, file, cb) => {
            mkdirSync(dest, { recursive: true });
            cb(null, dest);
        },
        filename: (req, file, cb) => {
            const unique = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
            cb(null, `${unique}${extname(file.originalname)}`);
        },
    });
}
let ChaptersController = class ChaptersController {
    chaptersService;
    constructor(chaptersService) {
        this.chaptersService = chaptersService;
    }
    async uploadChapter(files, bookIdStr, chapterNumStr, title) {
        const pdfFile = files?.file?.[0];
        if (!pdfFile)
            throw new BadRequestException('PDF file is required');
        const bookId = parseInt(bookIdStr, 10);
        const chapterNum = parseInt(chapterNumStr, 10);
        const coverFile = files?.cover?.[0];
        const coverPath = coverFile ? `/thumbnails/${coverFile.filename}` : undefined;
        return this.chaptersService.create(bookId, chapterNum, title || `Chapter ${chapterNum}`, pdfFile.filename, `/uploads/${pdfFile.filename}`, coverPath);
    }
    async remove(id) {
        return this.chaptersService.remove(id);
    }
};
__decorate([
    Post('upload'),
    UseInterceptors(FileFieldsInterceptor([
        { name: 'file', maxCount: 1 },
        { name: 'cover', maxCount: 1 },
    ], {
        storage: diskStorage({
            destination: (req, file, cb) => {
                let dest;
                if (file.fieldname === 'cover') {
                    dest = join(process.cwd(), 'thumbnails');
                }
                else {
                    dest = join(process.cwd(), 'uploads');
                }
                mkdirSync(dest, { recursive: true });
                cb(null, dest);
            },
            filename: (req, file, cb) => {
                const unique = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
                cb(null, `${unique}${extname(file.originalname)}`);
            },
        }),
        fileFilter: (req, file, cb) => {
            if (file.fieldname === 'file' && file.mimetype !== 'application/pdf') {
                return cb(new BadRequestException('Only PDF files allowed'), false);
            }
            cb(null, true);
        },
    })),
    __param(0, UploadedFiles()),
    __param(1, Body('bookId')),
    __param(2, Body('chapterNum')),
    __param(3, Body('title')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String]),
    __metadata("design:returntype", Promise)
], ChaptersController.prototype, "uploadChapter", null);
__decorate([
    Delete(':id'),
    __param(0, Param('id', ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ChaptersController.prototype, "remove", null);
ChaptersController = __decorate([
    Controller('chapters'),
    __metadata("design:paramtypes", [ChaptersService])
], ChaptersController);
export { ChaptersController };
//# sourceMappingURL=chapters.controller.js.map