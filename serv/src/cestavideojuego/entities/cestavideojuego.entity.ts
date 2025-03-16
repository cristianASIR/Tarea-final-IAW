import { Cesta } from "src/cesta/entities/cesta.entity";
import { Videojuego } from "src/videojuegos/entities/videojuego.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cestavideojuego {
@PrimaryGeneratedColumn()
id: number
@Column()
cantidad: number
@Column()
fecha_compra: Date

//Tabla creada por relación N:N entre Videojuego y Cesta
//Una cesta contiene varios videojuegos
@ManyToOne(() => Cesta, (cesta) => cesta.cestaVideojuego)
cesta: Cesta

//Un videojuego puede estar en varias cestas de diferentes clientes
@ManyToOne(() => Videojuego, (videojuego) => videojuego.cestaVideojuegos)
videojuegos: Videojuego
}
