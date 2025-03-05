import { Module } from '@nestjs/common';
import { VideojuegosService } from './videojuegos.service';
import { VideojuegosController } from './videojuegos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Videojuego } from './entities/videojuego.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Videojuego])],
  controllers: [VideojuegosController],
  providers: [VideojuegosService],
})
export class VideojuegosModule {}
