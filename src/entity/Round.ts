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

  @ManyToOne(() => WorldCup, (worldcup) => worldcup.rounds)
  worldCup: WorldCup;

  @Column()
  name: string;

  @OneToMany(() => Match, (match) => match.round)
  mathes: Match[];
}
