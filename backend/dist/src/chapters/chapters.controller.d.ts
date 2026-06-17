import { ChaptersService } from './chapters.service.js';
export declare class ChaptersController {
    private readonly chaptersService;
    constructor(chaptersService: ChaptersService);
    uploadChapter(files: {
        file?: Express.Multer.File[];
        cover?: Express.Multer.File[];
    }, bookIdStr: string, chapterNumStr: string, title?: string): Promise<{
        path: string;
        title: string | null;
        createdAt: Date;
        id: number;
        chapterNum: number;
        filename: string;
        bookId: number;
    }>;
    remove(id: number): Promise<{
        deleted: boolean;
    }>;
}
