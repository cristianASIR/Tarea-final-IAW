import { Cesta } from "src/cesta/entities/cesta.entity";
import { Videojuego } from "src/videojuegos/entities/videojuego.entity";
export declare class Cestavideojuego {
    id: number;
    cantidad: number;
    fecha_compra: Date;
    cesta: Cesta;
    videojuegos: Videojuego;
}
