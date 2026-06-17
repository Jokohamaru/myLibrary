var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { BooksModule } from './books/books.module.js';
import { AuthModule } from './auth/auth.module.js';
import { CategoriesModule } from './categories/categories.module.js';
import { ChaptersModule } from './chapters/chapters.module.js';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { mkdirSync } from 'fs';
mkdirSync(join(process.cwd(), 'uploads'), { recursive: true });
mkdirSync(join(process.cwd(), 'thumbnails'), { recursive: true });
let AppModule = class AppModule {
};
AppModule = __decorate([
    Module({
        imports: [
            ServeStaticModule.forRoot({
                rootPath: join(process.cwd(), 'uploads'),
                serveRoot: '/uploads',
            }, {
                rootPath: join(process.cwd(), 'thumbnails'),
                serveRoot: '/thumbnails',
            }),
            AuthModule,
            CategoriesModule,
            BooksModule,
            ChaptersModule,
        ],
        controllers: [AppController],
        providers: [AppService],
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map