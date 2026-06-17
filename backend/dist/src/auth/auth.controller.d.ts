import { AuthService } from './auth.service.js';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(body: {
        email: string;
        password: string;
    }): Promise<{
        id: number;
        email: string;
    }>;
    login(body: {
        email: string;
        password: string;
    }): Promise<{
        id: number;
        email: string;
    }>;
}
