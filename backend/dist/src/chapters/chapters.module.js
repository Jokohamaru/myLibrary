var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module } from '@nestjs/common';
import { ChaptersService } from './chapters.service.js';
import { ChaptersController } from './chapters.controller.js';
import { PrismaService } from '../prisma.service.js';
let ChaptersModule = class ChaptersModule {
};
ChaptersModule = __decorate([
    Module({
        controllers: [ChaptersController],
        providers: [ChaptersService, PrismaService],
        exports: [ChaptersService],
    })
], ChaptersModule);
export { ChaptersModule };
//# sourceMappingURL=chapters.module.js.map