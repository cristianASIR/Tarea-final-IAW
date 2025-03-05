import { Cestavideojuego } from "src/cestavideojuego/entities/cestavideojuego.entity"
import { Cliente } from "src/cliente/entities/cliente.entity"
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Cesta {
 @PrimaryGeneratedColumn()
 idcesta: number
 @Column()
 producto: string
 @Column()
 fecha_compra: Date
 @ManyToOne( () => Cliente,
 (cliente) => cliente.cesta)
 cliente: Cliente
 @OneToMany(() => Cestavideojuego , (cv) => cv.cesta, {cascade: true})
 cestaVideojuego: Cestavideojuego[]
}
