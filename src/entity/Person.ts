import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Country } from "./Country";

@Entity()
export class Person {

    @PrimaryGeneratedColumn("uuid")
    id: number
 
    @Column()
    name: string

    @Column()
    birth: string
    
    @ManyToOne(() => Country, (country) => country.people)
    country: Country
}
