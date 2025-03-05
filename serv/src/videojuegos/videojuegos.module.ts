import { Module } from '@nestjs/common';
import { VideojuegosService } from './videojuegos.service';
import { VideojuegosController } from './videojuegos.controller';

@Module({
  controllers: [VideojuegosController],
  providers: [VideojuegosService],
})
export class VideojuegosModule {}
