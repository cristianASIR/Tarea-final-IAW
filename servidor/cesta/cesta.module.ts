import { Module } from '@nestjs/common';
import { CestaService } from './cesta.service';
import { CestaController } from './cesta.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cesta } from './entities/cesta.entity';
import { Cliente } from 'src/cliente/entities/cliente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cesta, Cliente])],
  controllers: [CestaController],
  providers: [CestaService],
  exports: [CestaService]
})
export class CestaModule {}
