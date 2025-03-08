import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { CreateVideojuegoDto } from './dto/create-videojuego.dto';
import { UpdateVideojuegoDto } from './dto/update-videojuego.dto';
import { VideojuegoService } from './videojuegos.service';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';

@Controller('videojuegos')
export class VideojuegosController {
  constructor(private readonly videojuegosService: VideojuegoService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
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
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() updateVideojuegoDto: UpdateVideojuegoDto) {
    return this.videojuegosService.update(+id, updateVideojuegoDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.videojuegosService.remove(+id);
  }
}
