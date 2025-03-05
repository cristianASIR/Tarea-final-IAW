import { Module } from '@nestjs/common';
import { CestavideojuegoService } from './cestavideojuego.service';
import { CestavideojuegoController } from './cestavideojuego.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cestavideojuego } from './entities/cestavideojuego.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cestavideojuego])],
  controllers: [CestavideojuegoController],
  providers: [CestavideojuegoService],
})
export class CestavideojuegoModule {}
