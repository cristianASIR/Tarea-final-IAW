import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from './entities/cliente.entity';
import * as bcrypt from 'bcrypt';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Cesta } from 'src/cesta/entities/cesta.entity';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Cliente)
    private readonly clienteRepository: Repository<Cliente>,
  ) {}

  async create(createClienteDto: CreateClienteDto): Promise<Cliente> {
    // Se hashea la contraseña recibida en el DTO
    const hashedPassword = await bcrypt.hash(createClienteDto.password, 10);
    createClienteDto.password = hashedPassword;
    
    // Se crea la instancia de Cliente a partir del DTO
    const cliente = this.clienteRepository.create(createClienteDto);
    
    // CAMBIO: Se asigna una nueva instancia de Cesta para que se cree automáticamente junto con el cliente.
    cliente.cesta = new Cesta();
    
    return await this.clienteRepository.save(cliente);
  }

  async findAll(): Promise<Cliente[]> {
    return await this.clienteRepository.find({ relations: ['cesta'] });
  }

  async findOne(id: number): Promise<Cliente> {
    const cliente = await this.clienteRepository.findOne({
      where: { idcliente: id },
      relations: ['cesta'],
    });
    if (!cliente) {
      throw new NotFoundException(`Cliente con id ${id} no encontrado`);
    }
    return cliente;
  }

  async update(id: number, updateClienteDto: UpdateClienteDto): Promise<Cliente> {
    const result = await this.clienteRepository.update(id, updateClienteDto);
    if (result.affected === 0) {
      throw new NotFoundException(`Cliente con id ${id} no encontrado`);
    }
    return await this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.clienteRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Cliente con id ${id} no encontrado`);
    }
  }
  
  async findByEmail(email: string): Promise<Cliente | null> {
    const cliente = await this.clienteRepository.findOne({ where: { email } });
    return cliente;
  }
}
