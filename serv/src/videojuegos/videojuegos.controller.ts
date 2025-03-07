import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { CreateVideojuegoDto } from './dto/create-videojuego.dto';
import { UpdateVideojuegoDto } from './dto/update-videojuego.dto';
import { VideojuegoService } from './videojuegos.service';

@Controller('videojuegos')
export class VideojuegosController {
  constructor(private readonly videojuegosService: VideojuegoService) {}

  @Post()
  create(@Body() createVideojuegoDto: CreateVideojuegoDto) {
    return this.videojuegosService.create(createVideojuegoDto);
  }

  @Get()
  findAll() {
    return this.videojuegosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.videojuegosService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateVideojuegoDto: UpdateVideojuegoDto) {
    return this.videojuegosService.update(+id, updateVideojuegoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.videojuegosService.remove(+id);
  }
}
