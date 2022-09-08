import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Match } from "./Match";
import { WorldCup } from "./WorldCup";

@Entity()
export class Round {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => WorldCup, (worldCup) => worldCup.rounds)
  worldCup: WorldCup;

  @OneToMany(() => Match, (match) => match.round)
  matches: Match[];
}
