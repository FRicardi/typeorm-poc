import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Country } from "./Country";
import { WorldCup } from "./WorldCup";

@Entity()
export class Group {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => WorldCup, (worldCup) => worldCup.groups)
  worldCup: WorldCup;

  @OneToMany(() => Country, (country) => country.group)
  countries: Country[];
}
