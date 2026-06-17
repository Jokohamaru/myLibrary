import { PrismaService } from '../prisma.service.js';
export declare class CategoriesService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        id: number;
        name: string;
    }[]>;
    findOrCreate(name: string): Promise<{
        id: number;
        name: string;
    }>;
}
