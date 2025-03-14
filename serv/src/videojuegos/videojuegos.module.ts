import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Videojuego } from './entities/videojuego.entity';
import { VideojuegoService } from './videojuegos.service';
import { VideojuegosController } from './videojuegos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Videojuego], )],
  controllers: [VideojuegosController],
  providers: [VideojuegoService],
})
export class VideojuegosModule {}
