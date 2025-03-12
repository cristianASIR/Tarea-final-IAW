import { Cestavideojuego } from "src/cestavideojuego/entities/cestavideojuego.entity";
import { Cliente } from "src/cliente/entities/cliente.entity";
export declare class Cesta {
    idcesta: number;
    producto: string;
    fecha_compra: Date;
    cliente: Cliente;
    cestaVideojuego: Cestavideojuego[];
}
