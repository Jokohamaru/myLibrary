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
let ChaptersService = class ChaptersService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(bookId, chapterNum, title, filename, filePath, coverPath) {
        const chapter = await this.prisma.chapter.create({
            data: {
                bookId,
                chapterNum,
                title,
                filename,
                path: filePath,
            },
        });
        if (coverPath) {
            const book = await this.prisma.book.findUnique({ where: { id: bookId } });
            if (book && !book.coverPath) {
                await this.prisma.book.update({
                    where: { id: bookId },
                    data: { coverPath },
                });
            }
        }
        return chapter;
    }
    async findByBook(bookId) {
        return this.prisma.chapter.findMany({
            where: { bookId },
            orderBy: { chapterNum: 'asc' },
        });
    }
    async remove(id) {
        const chapter = await this.prisma.chapter.findUnique({ where: { id } });
        if (!chapter)
            throw new NotFoundException('Chapter not found');
        const pdfPath = join(process.cwd(), 'uploads', chapter.filename);
        if (existsSync(pdfPath)) {
            unlinkSync(pdfPath);
        }
        await this.prisma.chapter.delete({ where: { id } });
        return { deleted: true };
    }
};
ChaptersService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], ChaptersService);
export { ChaptersService };
//# sourceMappingURL=chapters.service.js.map