import { PrismaService } from '../prisma.service.js';
export declare class AuthService {
    private prisma;
    constructor(prisma: PrismaService);
    register(email: string, password: string): Promise<{
        id: number;
        email: string;
    }>;
    login(email: string, password: string): Promise<{
        id: number;
        email: string;
    }>;
}
