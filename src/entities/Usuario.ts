import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Usuario {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    identificacion: string

    @Column()
    nombres: string

    @Column()
    apellidos: string
    
    @Column()
    fechaNacimiento: Date

    @Column({
        nullable: true,
        length: 100
    })
    email: string

    @Column({
        nullable: true,
        default:  'A',
        length: 1
    })
    estado: string

}
