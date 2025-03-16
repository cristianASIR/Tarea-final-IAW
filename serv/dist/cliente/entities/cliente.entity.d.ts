import { Cesta } from "src/cesta/entities/cesta.entity";
export declare class Cliente {
    idcliente: number;
    nombre: string;
    apellido: string;
    email: string;
    telefono: string;
    direccion: string;
    password: string;
    cesta: Cesta;
}
