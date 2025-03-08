import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/user.entity';
import { UsuarioService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario])],
  controllers: [UserController],
  providers: [UsuarioService],
  exports: [UsuarioService]
})
export class UsuarioModule {}
