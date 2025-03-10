import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateClienteDto {
    @IsNotEmpty()
    @IsNumber()
    id_cliente: number;
    @IsNotEmpty()
    @IsString()
    password: string;
    @IsNotEmpty()
    @IsString()
    nombre: string;
    @IsNotEmpty()
    @IsString()
    apellido: string;
    @IsNotEmpty()
    @IsString()
    email: string;
    @IsNotEmpty()
    @IsString()
    direccion: string;
    @IsNotEmpty()
    @IsString()
    telefono: string;
}
