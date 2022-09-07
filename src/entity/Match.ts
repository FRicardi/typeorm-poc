import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Country } from "./Country";
import { Goal } from "./Goal";
import { Group } from "./Group";
import { Round } from "./Round";
import { Stadium } from "./Stadium";

@Entity()
export class Match {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @ManyToOne(() => Round, (round) => round.mathes)
  round: Round;

  @Column()
  date: Date;

  @Column()
  time: Date;

  @Column()
  country1: Country;

  @Column()
  country2: Country;

  @Column()
  score1: number;

  @Column()
  score2: number;

  @OneToMany(() => Goal, (goal) => goal.math)
  goals1: Goal[];

  @OneToMany(() => Goal, (goal) => goal.math)
  goals2: Goal[];

  @Column()
  group: Group;

  @Column()
  stadium: Stadium;
}
