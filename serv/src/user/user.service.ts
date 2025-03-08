import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Usuario } from './entities/user.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private userRepository: Repository<Usuario>,
  ) { }
  async findOne(email: string): Promise<Usuario | undefined> {
    //tu codigo generaba problema con el tipo de retorno, he modificado la función para que devuelva un usuario o un error
    const user = await this.userRepository.findOne({ where: { email } });
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }
  async create(name: string, email: string, password: string): Promise<Usuario> {
    const hashedPassword = await bcrypt.hash(password, 10); //si no se hiciera en el login de auth habría que ponerlo aquí
    const user = this.userRepository.create({
      name,
      email,
      password,
    });
    return this.userRepository.save(user);
  }
}

