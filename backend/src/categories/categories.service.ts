import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.category.findMany({ orderBy: { name: 'asc' } });
  }

  async findOrCreate(name: string) {
    const normalizedName = name.trim().toLowerCase();
    return this.prisma.category.upsert({
      where: { name: normalizedName },
      update: {},
      create: { name: normalizedName },
    });
  }
}
