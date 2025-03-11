import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCestaDto } from './dto/create-cesta.dto';
import { UpdateCestaDto } from './dto/update-cesta.dto';
import { Cesta } from './entities/cesta.entity';
import { Cliente } from 'src/cliente/entities/cliente.entity';

@Injectable()
export class CestaService {
  constructor(
    @InjectRepository(Cesta)
    private readonly cestaRepository: Repository<Cesta>,
    @InjectRepository(Cliente) // Inject Cliente repository
    private readonly clienteRepository: Repository<Cliente>,
  ) { }

  async create(createCestaDto: CreateCestaDto): Promise<Cesta> {
    const { id_cliente, ...cestaData } = createCestaDto;

    const cliente = await this.clienteRepository.findOne({ where: { idcliente: id_cliente } });
    if (!cliente) {
      throw new NotFoundException(`Cliente con id ${id_cliente} no encontrado`);
    }

    const cesta = this.cestaRepository.create({
      ...cestaData,
      cliente: cliente, // Assign the Cliente entity
    });

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
    const cesta = await this.cestaRepository.findOne({ where: { idcesta: id } });
    if (!cesta) {
      throw new NotFoundException(`Cesta con id ${id} no encontrada`);
    }
    Object.assign(cesta, updateCestaDto);
    return await this.cestaRepository.save(cesta);
  }

  async remove(id: number): Promise<void> {
    const result = await this.cestaRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Cesta con id ${id} no encontrada`);
    }
  }
}



