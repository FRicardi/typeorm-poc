import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Country } from "./Country";

@Entity()
export class Person {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @ManyToOne(() => Country, (country) => country.people)
  country: Country;

  @Column()
  name: string;

  @Column()
  birth: string;
}
