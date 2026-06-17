import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Allow requests from any origin (LAN devices, localhost, etc.)
  app.enableCors({ origin: true, credentials: true });
  // Listen on all interfaces so phones on the same LAN can connect
  await app.listen(process.env.PORT ?? 3000, '0.0.0.0');
}
bootstrap();
