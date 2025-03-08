import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateCestaDto {
    @IsNotEmpty()
    @IsNumber()
    id_cliente: number;
    @IsNotEmpty()
    @IsNumber()
    id_producto: number;
    @IsNotEmpty()
    @IsNumber()
    cantidad: number;
}
