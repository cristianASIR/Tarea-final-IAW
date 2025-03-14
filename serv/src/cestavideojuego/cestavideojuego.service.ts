import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCestavideojuegoDto } from './dto/create-cestavideojuego.dto';
import { UpdateCestavideojuegoDto } from './dto/update-cestavideojuego.dto';
import { Cestavideojuego } from './entities/cestavideojuego.entity';
import { Cesta } from 'src/cesta/entities/cesta.entity';
import { Videojuego } from 'src/videojuegos/entities/videojuego.entity';

@Injectable()
export class CestavideojuegoService {
  constructor(
    @InjectRepository(Cestavideojuego)
    private readonly cestavideojuegoRepository: Repository<Cestavideojuego>,

    @InjectRepository(Cesta)
    private readonly cestaRepository: Repository<Cesta>,

    @InjectRepository(Videojuego)
    private readonly videojuegoRepository: Repository<Videojuego>,
  ) {}

  async create(createDto: CreateCestavideojuegoDto): Promise<Cestavideojuego> {
    const { id_cesta, id_producto, cantidad, fecha_compra } = createDto;

    // 1. Buscas la cesta
    const cesta = await this.cestaRepository.findOneBy({ idcesta: id_cesta });
    if (!cesta) {
      throw new NotFoundException(`No existe cesta con id: ${id_cesta}`);
    }

    // 2. Buscas el videojuego
    const videojuego = await this.videojuegoRepository.findOneBy({ idproducto: id_producto });
    if (!videojuego) {
      throw new NotFoundException(`No existe videojuego con id: ${id_producto}`);
    }

    // 3. Creas la relación
    const nuevoCestaVideojuego = this.cestavideojuegoRepository.create({
      cantidad,
      fecha_compra,
      cesta,              // asignas el objeto completo
      videojuegos: videojuego,
    });

    return this.cestavideojuegoRepository.save(nuevoCestaVideojuego);
  }

  async findAll(): Promise<Cestavideojuego[]> {
    return this.cestavideojuegoRepository.find({
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
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.cestavideojuegoRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Cestavideojuego con id ${id} no encontrado`);
    }
  }
}
