import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

    @Column()
    dayOfBirth: Date

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
    state: string

}
