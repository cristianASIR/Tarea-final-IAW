import { PartialType } from '@nestjs/mapped-types';
import { CreateCestavideojuegoDto } from './create-cestavideojuego.dto';

export class UpdateCestavideojuegoDto extends PartialType(CreateCestavideojuegoDto) {}
