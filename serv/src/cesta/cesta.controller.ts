import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { CestaService } from './cesta.service';
import { CreateCestaDto } from './dto/create-cesta.dto';
import { UpdateCestaDto } from './dto/update-cesta.dto';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';

@Controller('cesta')
export class CestaController {
  constructor(private readonly cestaService: CestaService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createCestaDto: CreateCestaDto) {
    return this.cestaService.create(createCestaDto);
  }

  @Get()
  findAll() {
    return this.cestaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cestaService.findOne(+id);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() updateCestaDto: UpdateCestaDto) {
    return this.cestaService.update(+id, updateCestaDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.cestaService.remove(+id);
  }
}
