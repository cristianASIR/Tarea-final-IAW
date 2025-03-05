import { Module } from '@nestjs/common';
import { CestaService } from './cesta.service';
import { CestaController } from './cesta.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cesta } from './entities/cesta.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cesta])],
  controllers: [CestaController],
  providers: [CestaService],
})
export class CestaModule {}
