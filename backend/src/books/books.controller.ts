import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Param,
  Body,
  Headers,
  ParseIntPipe,
  BadRequestException,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname, join } from 'path';
import { existsSync, unlinkSync } from 'fs';
import { BooksService } from './books.service.js';
import { CategoriesService } from '../categories/categories.service.js';

@Controller('books')
export class BooksController {
  constructor(
    private readonly booksService: BooksService,
    private readonly categoriesService: CategoriesService,
  ) {}

  @Post()
  async create(
    @Headers('x-user-id') userIdHeader: string,
    @Body('title') title: string,
    @Body('author') author?: string,
    @Body('description') description?: string,
    @Body('isMultiChap') isMultiChapRaw?: boolean | string,
    @Body('categoryId') categoryIdRaw?: number | string,
    @Body('categoryName') categoryName?: string,
  ) {
    if (!title) throw new BadRequestException('Title is required');
    const userId = parseInt(userIdHeader, 10);
    if (!userId) throw new BadRequestException('x-user-id header is required');

    let categoryId: number | undefined;
    if (categoryName) {
      const cat = await this.categoriesService.findOrCreate(categoryName);
      categoryId = cat.id;
    } else if (categoryIdRaw !== undefined) {
      categoryId = typeof categoryIdRaw === 'number' ? categoryIdRaw : parseInt(categoryIdRaw, 10);
    }

    const isMultiChap = typeof isMultiChapRaw === 'boolean' ? isMultiChapRaw : isMultiChapRaw === 'true';

    return this.booksService.create(userId, title, author, description, isMultiChap, categoryId);
  }

  @Get()
  async findAll(@Headers('x-user-id') userIdHeader: string) {
    const userId = parseInt(userIdHeader, 10);
    if (!userId) throw new BadRequestException('x-user-id header is required');
    return this.booksService.findAll(userId);
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.booksService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: {
      currentPage?: number;
      currentChapterId?: number;
      readingMode?: string;
      title?: string;
      author?: string;
      description?: string;
    },
  ) {
    return this.booksService.update(id, body);
  }

  @Post(':id/cover')
  @UseInterceptors(
    FileInterceptor('cover', {
      storage: diskStorage({
        destination: join(process.cwd(), 'thumbnails'),
        filename: (_req, file, cb) => {
          const unique = Date.now() + '-' + Math.round(Math.random() * 1e9);
          cb(null, `cover-${unique}${extname(file.originalname)}`);
        },
      }),
      fileFilter: (_req, file, cb) => {
        if (!file.mimetype.startsWith('image/')) {
          return cb(new BadRequestException('Only image files are allowed'), false);
        }
        cb(null, true);
      },
      limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB
    }),
  )
  async uploadCover(
    @Param('id', ParseIntPipe) id: number,
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (!file) throw new BadRequestException('No image file provided');

    // Delete old cover if exists
    const book = await this.booksService.findOne(id);
    if (book.coverPath) {
      const oldFile = book.coverPath.replace('/thumbnails/', '');
      const oldPath = join(process.cwd(), 'thumbnails', oldFile);
      if (existsSync(oldPath)) unlinkSync(oldPath);
    }

    const coverPath = `/thumbnails/${file.filename}`;
    return this.booksService.updateCover(id, coverPath);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.booksService.remove(id);
  }
}
