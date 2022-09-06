import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Country {

    @PrimaryGeneratedColumn("uuid")
    id: number
 
    @Column()
    name: string

    @Column()
    capital: string
    
    @Column({unique: true})
    acronym: string
}
