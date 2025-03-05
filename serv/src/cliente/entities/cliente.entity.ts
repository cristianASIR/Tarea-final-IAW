import { Cesta } from "src/cesta/entities/cesta.entity"
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"

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
@OneToMany( () => Cesta, (cesta) => cesta.cliente)
 cesta: Cesta[]
}
