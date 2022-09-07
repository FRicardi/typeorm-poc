import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Country } from "./Country";
import { Group } from "./Group";
import { Round } from "./Round";
import { Stadium } from "./Stadium";

@Entity()
export class WorldCup {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Country, (country) => country.worldCup)
  countries: Country[];

  @OneToMany(() => Group, (group) => group.worldCup)
  groups: Group[];

  @OneToMany(() => Stadium, (stadium) => stadium.worldCup)
  stadiums: Stadium[];

  @OneToMany(() => Round, (round) => round.worldCup)
  rounds: Round[];
}
