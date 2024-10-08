import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Profile {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nameProfile: string

    @Column()
    state: boolean
  
}
