import { Injectable } from '@nestjs/common';
import { CreateCestavideojuegoDto } from './dto/create-cestavideojuego.dto';
import { UpdateCestavideojuegoDto } from './dto/update-cestavideojuego.dto';

@Injectable()
export class CestavideojuegoService {
  create(createCestavideojuegoDto: CreateCestavideojuegoDto) {
    return 'This action adds a new cestavideojuego';
  }

  findAll() {
    return `This action returns all cestavideojuego`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cestavideojuego`;
  }

  update(id: number, updateCestavideojuegoDto: UpdateCestavideojuegoDto) {
    return `This action updates a #${id} cestavideojuego`;
  }

  remove(id: number) {
    return `This action removes a #${id} cestavideojuego`;
  }
}
