import { Cestavideojuego } from "src/cestavideojuego/entities/cestavideojuego.entity"
import { Cliente } from "src/cliente/entities/cliente.entity"
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Cesta {
 @PrimaryGeneratedColumn()
 idcesta: number
 @Column()
 producto: string
 @Column()
 fecha_compra: Date

 //Cesta recoje el Idcliente para conocer a que cliente pertenece
 @OneToOne( () => Cliente, (cliente) => cliente.cesta)
 @JoinColumn()
 cliente: Cliente

 //Cesta tiene una relacion de uno a muchos con Cestavideojuego
 @OneToMany(() => Cestavideojuego , (cv) => cv.cesta, {cascade: true})
 cestaVideojuego: Cestavideojuego[]
}
