import { Cestavideojuego } from "src/cestavideojuego/entities/cestavideojuego.entity"
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Videojuego {
 @PrimaryGeneratedColumn()
 idproducto: number
 @Column()
 nombre: string
 @Column()
 precio: number
 @Column()
 descripcion: string
 @Column({ default: 5 })
 descuento: number
 @Column()
 imagen: string

 //Un videojuego puede estar en muchas cestas
 @OneToMany( () => Cestavideojuego, (cv) => cv.videojuegos,)
 cestaVideojuegos: Cestavideojuego[]
}
