import { PrismaService } from '../prisma.service.js';
export declare class BooksService {
    private prisma;
    constructor(prisma: PrismaService);
    create(userId: number, title: string, author?: string, description?: string, isMultiChap?: boolean, categoryId?: number): Promise<{
        category: {
            id: number;
            name: string;
        } | null;
        chapters: {
            title: string | null;
            createdAt: Date;
            id: number;
            chapterNum: number;
            filename: string;
            path: string;
            bookId: number;
        }[];
    } & {
        title: string;
        author: string | null;
        description: string | null;
        coverPath: string | null;
        isMultiChap: boolean;
        currentPage: number;
        currentChapterId: number | null;
        readingMode: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        userId: number;
        categoryId: number | null;
    }>;
    findAll(userId: number): Promise<({
        category: {
            id: number;
            name: string;
        } | null;
        chapters: {
            title: string | null;
            createdAt: Date;
            id: number;
            chapterNum: number;
            filename: string;
            path: string;
            bookId: number;
        }[];
    } & {
        title: string;
        author: string | null;
        description: string | null;
        coverPath: string | null;
        isMultiChap: boolean;
        currentPage: number;
        currentChapterId: number | null;
        readingMode: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        userId: number;
        categoryId: number | null;
    })[]>;
    findOne(id: number): Promise<{
        category: {
            id: number;
            name: string;
        } | null;
        chapters: {
            title: string | null;
            createdAt: Date;
            id: number;
            chapterNum: number;
            filename: string;
            path: string;
            bookId: number;
        }[];
    } & {
        title: string;
        author: string | null;
        description: string | null;
        coverPath: string | null;
        isMultiChap: boolean;
        currentPage: number;
        currentChapterId: number | null;
        readingMode: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        userId: number;
        categoryId: number | null;
    }>;
    update(id: number, data: {
        currentPage?: number;
        currentChapterId?: number;
        readingMode?: string;
        title?: string;
        author?: string;
        description?: string;
    }): Promise<{
        category: {
            id: number;
            name: string;
        } | null;
        chapters: {
            title: string | null;
            createdAt: Date;
            id: number;
            chapterNum: number;
            filename: string;
            path: string;
            bookId: number;
        }[];
    } & {
        title: string;
        author: string | null;
        description: string | null;
        coverPath: string | null;
        isMultiChap: boolean;
        currentPage: number;
        currentChapterId: number | null;
        readingMode: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        userId: number;
        categoryId: number | null;
    }>;
    updateCover(id: number, coverPath: string): Promise<{
        category: {
            id: number;
            name: string;
        } | null;
        chapters: {
            title: string | null;
            createdAt: Date;
            id: number;
            chapterNum: number;
            filename: string;
            path: string;
            bookId: number;
        }[];
    } & {
        title: string;
        author: string | null;
        description: string | null;
        coverPath: string | null;
        isMultiChap: boolean;
        currentPage: number;
        currentChapterId: number | null;
        readingMode: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        userId: number;
        categoryId: number | null;
    }>;
    remove(id: number): Promise<{
        deleted: boolean;
    }>;
}
