import { CategoriesService } from './categories.service.js';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    findAll(): Promise<{
        id: number;
        name: string;
    }[]>;
}
