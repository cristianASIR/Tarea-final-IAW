import { Cesta } from "src/cesta/entities/cesta.entity";
import { Videojuego } from "src/videojuegos/entities/videojuego.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cestavideojuego {
@PrimaryGeneratedColumn()
id: number
@Column()
cantidad: number
@ManyToOne(() => Cesta, (cesta) => cesta.cestaVideojuego)
cesta: Cesta
@ManyToOne(() => Videojuego, (videojuego) => videojuego.cestaVideojuegos)
videojuegos: Videojuego
}
