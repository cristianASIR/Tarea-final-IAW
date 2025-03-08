import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { CestavideojuegoService } from './cestavideojuego.service';
import { CreateCestavideojuegoDto } from './dto/create-cestavideojuego.dto';
import { UpdateCestavideojuegoDto } from './dto/update-cestavideojuego.dto';

@Controller('cestavideojuego')
export class CestavideojuegoController {
  constructor(private readonly cestavideojuegoService: CestavideojuegoService) {}

  @Post()
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
  update(@Param('id') id: string, @Body() updateCestavideojuegoDto: UpdateCestavideojuegoDto) {
    return this.cestavideojuegoService.update(+id, updateCestavideojuegoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cestavideojuegoService.remove(+id);
  }
}
