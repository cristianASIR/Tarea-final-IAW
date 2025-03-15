import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
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

    // Si NO quieres verificar la existencia en la BD, asigna directamente los IDs:
    const nuevoCestaVideojuego = this.cestavideojuegoRepository.create({
      cantidad,
      fecha_compra,
      cesta: { idcesta: id_cesta } as Cesta,        // Foreign key para Cesta
      videojuegos: { idproducto: id_producto } as Videojuego, // Foreign key para Videojuego
    });

    // Guarda el nuevo registro en la tabla "cestavideojuego"
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
    if (Object.keys(updateDto).length === 0) {
      throw new BadRequestException('No se han enviado campos para actualizar');
    }
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
