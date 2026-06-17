import { Module } from '@nestjs/common';
import { BooksService } from './books.service.js';
import { BooksController } from './books.controller.js';
import { PrismaService } from '../prisma.service.js';
import { CategoriesModule } from '../categories/categories.module.js';

@Module({
  imports: [CategoriesModule],
  controllers: [BooksController],
  providers: [BooksService, PrismaService],
})
export class BooksModule {}
