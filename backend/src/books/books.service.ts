import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';
import { unlinkSync, existsSync } from 'fs';
import { join } from 'path';

@Injectable()
export class BooksService {
  constructor(private prisma: PrismaService) {}

  async create(
    userId: number,
    title: string,
    author?: string,
    description?: string,
    isMultiChap?: boolean,
    categoryId?: number,
  ) {
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

  async findAll(userId: number) {
    return this.prisma.book.findMany({
      where: { userId },
      include: {
        category: true,
        chapters: { orderBy: { chapterNum: 'asc' } },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: number) {
    const book = await this.prisma.book.findUnique({
      where: { id },
      include: {
        category: true,
        chapters: { orderBy: { chapterNum: 'asc' } },
      },
    });
    if (!book) throw new NotFoundException('Book not found');
    return book;
  }

  async update(
    id: number,
    data: {
      currentPage?: number;
      currentChapterId?: number;
      readingMode?: string;
      title?: string;
      author?: string;
      description?: string;
    },
  ) {
    return this.prisma.book.update({
      where: { id },
      data,
      include: { category: true, chapters: true },
    });
  }

  async updateCover(id: number, coverPath: string) {
    return this.prisma.book.update({
      where: { id },
      data: { coverPath },
      include: { category: true, chapters: true },
    });
  }

  async remove(id: number) {
    const book = await this.prisma.book.findUnique({
      where: { id },
      include: { chapters: true },
    });
    if (!book) throw new NotFoundException('Book not found');

    // Delete all PDF files
    for (const chapter of book.chapters) {
      const pdfPath = join(process.cwd(), 'uploads', chapter.filename);
      if (existsSync(pdfPath)) unlinkSync(pdfPath);
    }

    // Delete cover image
    if (book.coverPath) {
      const coverFile = book.coverPath.replace('/thumbnails/', '');
      const coverFullPath = join(process.cwd(), 'thumbnails', coverFile);
      if (existsSync(coverFullPath)) unlinkSync(coverFullPath);
    }

    await this.prisma.book.delete({ where: { id } });
    return { deleted: true };
  }
}
