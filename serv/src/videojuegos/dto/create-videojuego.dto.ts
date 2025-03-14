import { IsDecimal, IsNotEmpty, IsNumber, IsString } from "class-validator";
export class CreateVideojuegoDto {
    @IsNotEmpty()
    @IsNumber()
    id_producto: number;
    @IsNotEmpty()
    @IsString()
    nombre: string;
    @IsNotEmpty()
    @IsString()
    descripcion: string;
    @IsNotEmpty()
    @IsNumber()
    precio: number;
    @IsNumber()
    descuento: number;
}
