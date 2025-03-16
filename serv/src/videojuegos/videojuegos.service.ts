import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Videojuego } from './entities/videojuego.entity';
import { CreateVideojuegoDto } from './dto/create-videojuego.dto';
import { UpdateVideojuegoDto } from './dto/update-videojuego.dto';

@Injectable()
export class VideojuegoService {
  constructor(
    @InjectRepository(Videojuego)
    private readonly videojuegoRepository: Repository<Videojuego>,
  ) {}

  async create(createVideojuegoDto: CreateVideojuegoDto): Promise<Videojuego> {
    const videojuego = this.videojuegoRepository.create(createVideojuegoDto);
    return await this.videojuegoRepository.save(videojuego);
  }

  async findAll(): Promise<Videojuego[]> {
    return await this.videojuegoRepository.find({
      relations: ['cestaVideojuegos'],
    });
  }

  async findOne(id: number): Promise<Videojuego> {
    const videojuego = await this.videojuegoRepository.findOne({
      where: { idproducto: id },
      relations: ['cestaVideojuegos'],
    });
    if (!videojuego) {
      throw new NotFoundException(`Videojuego con id ${id} no encontrado`);
    }
    return videojuego;
  }

  async update(id: number, updateVideojuegoDto: UpdateVideojuegoDto): Promise<Videojuego> {
    const result = await this.videojuegoRepository.update(id, updateVideojuegoDto);
    if (result.affected === 0) {
      throw new NotFoundException(`Videojuego con id ${id} no encontrado`);
    }
    return await this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.videojuegoRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Videojuego con id ${id} no encontrado`);
    }
  }
}
