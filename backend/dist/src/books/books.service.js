var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';
import { unlinkSync, existsSync } from 'fs';
import { join } from 'path';
let BooksService = class BooksService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(userId, title, author, description, isMultiChap, categoryId) {
        return this.prisma.book.create({
            data: {
                title,
                author,
                description,
                isMultiChap: isMultiChap ?? false,
                userId,
                categoryId,
            },
            include: { category: true, chapters: true },
        });
    }
    async findAll(userId) {
        return this.prisma.book.findMany({
            where: { userId },
            include: {
                category: true,
                chapters: { orderBy: { chapterNum: 'asc' } },
            },
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOne(id) {
        const book = await this.prisma.book.findUnique({
            where: { id },
            include: {
                category: true,
                chapters: { orderBy: { chapterNum: 'asc' } },
            },
        });
        if (!book)
            throw new NotFoundException('Book not found');
        return book;
    }
    async update(id, data) {
        return this.prisma.book.update({
            where: { id },
            data,
            include: { category: true, chapters: true },
        });
    }
    async updateCover(id, coverPath) {
        return this.prisma.book.update({
            where: { id },
            data: { coverPath },
            include: { category: true, chapters: true },
        });
    }
    async remove(id) {
        const book = await this.prisma.book.findUnique({
            where: { id },
            include: { chapters: true },
        });
        if (!book)
            throw new NotFoundException('Book not found');
        for (const chapter of book.chapters) {
            const pdfPath = join(process.cwd(), 'uploads', chapter.filename);
            if (existsSync(pdfPath))
                unlinkSync(pdfPath);
        }
        if (book.coverPath) {
            const coverFile = book.coverPath.replace('/thumbnails/', '');
            const coverFullPath = join(process.cwd(), 'thumbnails', coverFile);
            if (existsSync(coverFullPath))
                unlinkSync(coverFullPath);
        }
        await this.prisma.book.delete({ where: { id } });
        return { deleted: true };
    }
};
BooksService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], BooksService);
export { BooksService };
//# sourceMappingURL=books.service.js.map