import { IsNotEmpty, IsNumber, IsOptional } from "class-validator";

export class CreateCestaDto {
    @IsNotEmpty()
    @IsNumber()
    id_cliente: number;
    @IsOptional()
    @IsNumber()
    cantidad: number;
}
