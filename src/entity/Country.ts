import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Person } from "./Person";

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

    @OneToMany(() => Person, (person) => person.country)
    people: Person[]
}
