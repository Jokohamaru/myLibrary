import { BooksService } from './books.service.js';
import { CategoriesService } from '../categories/categories.service.js';
export declare class BooksController {
    private readonly booksService;
    private readonly categoriesService;
    constructor(booksService: BooksService, categoriesService: CategoriesService);
    create(userIdHeader: string, title: string, author?: string, description?: string, isMultiChapRaw?: boolean | string, categoryIdRaw?: number | string, categoryName?: string): Promise<{
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
    findAll(userIdHeader: string): Promise<({
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
    update(id: number, body: {
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
    uploadCover(id: number, file: Express.Multer.File): Promise<{
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
