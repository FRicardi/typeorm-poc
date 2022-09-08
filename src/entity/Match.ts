import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
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

  @Column()
  date: Date;

  @Column()
  time: Date;

  @Column()
  score1: number;

  @Column()
  score2: number;

  @ManyToOne(() => Round, (round) => round.matches)
  round: Round;

  @ManyToOne(() => Group)
  group: Group;

  @ManyToOne(() => Stadium)
  stadium: Stadium;

  @ManyToOne(() => Country)
  country1: Country;

  @ManyToOne(() => Country)
  country2: Country;

  @OneToMany(() => Goal, (goal) => goal.math)
  goals1: Goal[];

  @OneToMany(() => Goal, (goal) => goal.math)
  goals2: Goal[];
}
