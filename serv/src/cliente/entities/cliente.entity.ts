import { Cesta } from "src/cesta/entities/cesta.entity"
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Cliente {
 @PrimaryGeneratedColumn()
 idcliente: number
 @Column()
 nombre: string
 @Column()
 apellido: string
 @Column()
 email: string
 @Column()
 telefono: string
 @Column()
 direccion: string
 @Column()
 password: string
 
 //Cada cliente solo tiene una cesta
 @OneToOne(() => Cesta, (cesta) => cesta.cliente, { cascade: true, eager: true })
cesta: Cesta;
}
