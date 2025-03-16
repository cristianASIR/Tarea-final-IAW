import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { CestavideojuegoService } from './cestavideojuego.service';
import { CreateCestavideojuegoDto } from './dto/create-cestavideojuego.dto';
import { UpdateCestavideojuegoDto } from './dto/update-cestavideojuego.dto';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';

@Controller('cestavideojuego')
export class CestavideojuegoController {
  constructor(private readonly cestavideojuegoService: CestavideojuegoService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createCestavideojuegoDto: CreateCestavideojuegoDto) {
    return this.cestavideojuegoService.create(createCestavideojuegoDto);
  }

  @Get()
  findAll() {
    return this.cestavideojuegoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cestavideojuegoService.findOne(+id);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() updateCestavideojuegoDto: UpdateCestavideojuegoDto) {
    return this.cestavideojuegoService.update(+id, updateCestavideojuegoDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.cestavideojuegoService.remove(+id);
  }
}
