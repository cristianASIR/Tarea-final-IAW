import { Cesta } from "src/cesta/entities/cesta.entity"
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Cliente {
 @PrimaryGeneratedColumn()
 idcliente: number
 @Column()
 nombre: string
 @Column()
 ap1: string
 @Column()
 email: string
 @Column()
 tlf: string
 @Column()
 direccion: string
@Column()
password: string

//Cada cliente solo tiene una cesta
@OneToOne( () => Cesta, (cesta) => cesta.cliente) 
cesta: Cesta[]
}
