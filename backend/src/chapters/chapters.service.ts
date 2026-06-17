import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';
import { unlinkSync, existsSync } from 'fs';
import { join } from 'path';

@Injectable()
export class ChaptersService {
  constructor(private prisma: PrismaService) {}

  async create(
    bookId: number,
    chapterNum: number,
    title: string | undefined,
    filename: string,
    filePath: string,
    coverPath?: string,
  ) {
    const chapter = await this.prisma.chapter.create({
      data: {
        bookId,
        chapterNum,
        title,
        filename,
        path: filePath,
      },
    });

    // If cover provided (first chapter), update book coverPath
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

  async findByBook(bookId: number) {
    return this.prisma.chapter.findMany({
      where: { bookId },
      orderBy: { chapterNum: 'asc' },
    });
  }

  async remove(id: number) {
    const chapter = await this.prisma.chapter.findUnique({ where: { id } });
    if (!chapter) throw new NotFoundException('Chapter not found');

    // Delete PDF file
    const pdfPath = join(process.cwd(), 'uploads', chapter.filename);
    if (existsSync(pdfPath)) {
      unlinkSync(pdfPath);
    }

    await this.prisma.chapter.delete({ where: { id } });
    return { deleted: true };
  }
}
