import { IsDate, IsNotEmpty, IsNumber } from "class-validator";

export class CreateCestavideojuegoDto {
    @IsNotEmpty()
    @IsNumber()
    id_cesta: number;
    @IsNotEmpty()
    @IsNumber()
    id_producto: number;
    @IsNotEmpty()
    @IsNumber()
    cantidad: number;
    @IsNotEmpty()
    @IsDate()
    fecha_compra: Date;
}
