import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCestaDto } from './dto/create-cesta.dto';
import { UpdateCestaDto } from './dto/update-cesta.dto';
import { Cesta } from './entities/cesta.entity';

@Injectable()
export class CestaService {
  constructor(
    @InjectRepository(Cesta)
    private readonly cestaRepository: Repository<Cesta>,
  ) { }

  async create(createCestaDto: CreateCestaDto): Promise<Cesta> {
    const cesta = this.cestaRepository.create(createCestaDto);
    return await this.cestaRepository.save(cesta);
  }

  async findAll(): Promise<Cesta[]> {
    return await this.cestaRepository.find({
      relations: ['cliente', 'cestaVideojuego'],
    });
  }

  async findOne(id: number): Promise<Cesta> {
    const cesta = await this.cestaRepository.findOne({
      where: { idcesta: id },
      relations: ['cliente', 'cestaVideojuego'],
    });
    if (!cesta) {
      throw new NotFoundException(`Cesta con id ${id} no encontrada`);
    }
    return cesta;
  }

  async update(id: number, updateCestaDto: UpdateCestaDto): Promise<Cesta> {
    const result = await this.cestaRepository.update(id, updateCestaDto);
    if (result.affected === 0) {
      throw new NotFoundException(`Cesta con id ${id} no encontrada`);
    }
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.cestaRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Cesta con id ${id} no encontrada`);
    }
  }
}



