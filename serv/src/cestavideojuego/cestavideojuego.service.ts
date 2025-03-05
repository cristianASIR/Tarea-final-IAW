import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCestavideojuegoDto } from './dto/create-cestavideojuego.dto';
import { UpdateCestavideojuegoDto } from './dto/update-cestavideojuego.dto';
import { Cestavideojuego } from './entities/cestavideojuego.entity';

@Injectable()
export class CestavideojuegoService {
  constructor(
    @InjectRepository(Cestavideojuego)
    private readonly cestavideojuegoRepository: Repository<Cestavideojuego>,
  ) {}

  async create(createDto: CreateCestavideojuegoDto): Promise<Cestavideojuego> {
    const cestavideojuego = this.cestavideojuegoRepository.create(createDto);
    return await this.cestavideojuegoRepository.save(cestavideojuego);
  }

  async findAll(): Promise<Cestavideojuego[]> {
    return await this.cestavideojuegoRepository.find({
      relations: ['cesta', 'videojuegos'],
    });
  }

  async findOne(id: number): Promise<Cestavideojuego> {
    const cestavideojuego = await this.cestavideojuegoRepository.findOne({
      where: { id },
      relations: ['cesta', 'videojuegos'],
    });
    if (!cestavideojuego) {
      throw new NotFoundException(`Cestavideojuego con id ${id} no encontrado`);
    }
    return cestavideojuego;
  }

  async update(
    id: number,
    updateDto: UpdateCestavideojuegoDto,
  ): Promise<Cestavideojuego> {
    const result = await this.cestavideojuegoRepository.update(id, updateDto);
    if (result.affected === 0) {
      throw new NotFoundException(`Cestavideojuego con id ${id} no encontrado`);
    }
    return await this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.cestavideojuegoRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Cestavideojuego con id ${id} no encontrado`);
    }
  }
}
