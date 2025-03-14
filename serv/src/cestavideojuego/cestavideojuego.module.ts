import { Module } from '@nestjs/common';
import { CestavideojuegoService } from './cestavideojuego.service';
import { CestavideojuegoController } from './cestavideojuego.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cestavideojuego } from './entities/cestavideojuego.entity';
import { Cesta } from 'src/cesta/entities/cesta.entity';
import { Videojuego } from 'src/videojuegos/entities/videojuego.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cestavideojuego, Cesta, Videojuego])],
  controllers: [CestavideojuegoController],
  providers: [CestavideojuegoService],
})
export class CestavideojuegoModule {}
