import { Module } from '@nestjs/common';
import { ChaptersService } from './chapters.service.js';
import { ChaptersController } from './chapters.controller.js';
import { PrismaService } from '../prisma.service.js';

@Module({
  controllers: [ChaptersController],
  providers: [ChaptersService, PrismaService],
  exports: [ChaptersService],
})
export class ChaptersModule {}
