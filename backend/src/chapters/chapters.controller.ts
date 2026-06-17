import {
  Controller,
  Post,
  Delete,
  Param,
  Body,
  UseInterceptors,
  UploadedFiles,
  BadRequestException,
  ParseIntPipe,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { ChaptersService } from './chapters.service.js';
import { diskStorage } from 'multer';
import { extname, join } from 'path';
import { mkdirSync, writeFileSync } from 'fs';

function makeStorage(dest: string) {
  return diskStorage({
    destination: (req, file, cb) => {
      mkdirSync(dest, { recursive: true });
      cb(null, dest);
    },
    filename: (req, file, cb) => {
      const unique = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
      cb(null, `${unique}${extname(file.originalname)}`);
    },
  });
}

@Controller('chapters')
export class ChaptersController {
  constructor(private readonly chaptersService: ChaptersService) {}

  @Post('upload')
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'file', maxCount: 1 },
        { name: 'cover', maxCount: 1 },
      ],
      {
        storage: diskStorage({
          destination: (req, file, cb) => {
            let dest: string;
            if (file.fieldname === 'cover') {
              dest = join(process.cwd(), 'thumbnails');
            } else {
              dest = join(process.cwd(), 'uploads');
            }
            mkdirSync(dest, { recursive: true });
            cb(null, dest);
          },
          filename: (req, file, cb) => {
            const unique = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
            cb(null, `${unique}${extname(file.originalname)}`);
          },
        }),
        fileFilter: (req, file, cb) => {
          if (file.fieldname === 'file' && file.mimetype !== 'application/pdf') {
            return cb(new BadRequestException('Only PDF files allowed'), false);
          }
          cb(null, true);
        },
      },
    ),
  )
  async uploadChapter(
    @UploadedFiles() files: { file?: Express.Multer.File[]; cover?: Express.Multer.File[] },
    @Body('bookId') bookIdStr: string,
    @Body('chapterNum') chapterNumStr: string,
    @Body('title') title?: string,
  ) {
    const pdfFile = files?.file?.[0];
    if (!pdfFile) throw new BadRequestException('PDF file is required');

    const bookId = parseInt(bookIdStr, 10);
    const chapterNum = parseInt(chapterNumStr, 10);

    const coverFile = files?.cover?.[0];
    const coverPath = coverFile ? `/thumbnails/${coverFile.filename}` : undefined;

    return this.chaptersService.create(
      bookId,
      chapterNum,
      title || `Chapter ${chapterNum}`,
      pdfFile.filename,
      `/uploads/${pdfFile.filename}`,
      coverPath,
    );
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.chaptersService.remove(id);
  }
}
