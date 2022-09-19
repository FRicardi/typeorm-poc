import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Country } from "./Country";

@Entity()
export class Federation {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  name: string;

  @OneToOne(() => Country, (country: Country) => country.federation)
  country: Country;
}
