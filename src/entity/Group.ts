import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Country } from "./Country";
import { WorldCup } from "./WorldCup";

@Entity()
export class Group {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @ManyToOne(() => WorldCup, (worldcup) => worldcup.groups)
  worldCup: WorldCup;

  @Column()
  name: string;

  @OneToMany(() => Country, (country) => country.group)
  countries: Country[];
}
