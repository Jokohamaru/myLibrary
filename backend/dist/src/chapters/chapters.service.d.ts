import { PrismaService } from '../prisma.service.js';
export declare class ChaptersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(bookId: number, chapterNum: number, title: string | undefined, filename: string, filePath: string, coverPath?: string): Promise<{
        path: string;
        title: string | null;
        coverPath: string | null;
        createdAt: Date;
        id: number;
        chapterNum: number;
        filename: string;
        bookId: number;
    }>;
    findByBook(bookId: number): Promise<{
        path: string;
        title: string | null;
        coverPath: string | null;
        createdAt: Date;
        id: number;
        chapterNum: number;
        filename: string;
        bookId: number;
    }[]>;
    remove(id: number): Promise<{
        deleted: boolean;
    }>;
}
