import { Cestavideojuego } from "src/cestavideojuego/entities/cestavideojuego.entity";
export declare class Videojuego {
    idproducto: number;
    nombre: string;
    precio: number;
    descripcion: string;
    descuento: number;
    imagen: string;
    cestaVideojuegos: Cestavideojuego[];
}
