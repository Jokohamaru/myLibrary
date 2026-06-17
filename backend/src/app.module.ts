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

// Ensure upload and thumbnail directories exist
mkdirSync(join(process.cwd(), 'uploads'), { recursive: true });
mkdirSync(join(process.cwd(), 'thumbnails'), { recursive: true });

@Module({
  imports: [
    ServeStaticModule.forRoot(
      {
        rootPath: join(process.cwd(), 'uploads'),
        serveRoot: '/uploads',
      },
      {
        rootPath: join(process.cwd(), 'thumbnails'),
        serveRoot: '/thumbnails',
      },
    ),
    AuthModule,
    CategoriesModule,
    BooksModule,
    ChaptersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
