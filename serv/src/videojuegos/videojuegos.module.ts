import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Videojuego } from './entities/videojuego.entity';
import { VideojuegoService } from './videojuegos.service';
import { VideojuegosController } from './videojuegos.controller';
import { SeedService } from './seed.service';

@Module({
  imports: [TypeOrmModule.forFeature([Videojuego])],
  controllers: [VideojuegosController],
  providers: [VideojuegoService, SeedService],
})
export class VideojuegosModule {}
