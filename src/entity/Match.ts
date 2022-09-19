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
  matchNum: number;

  @Column()
  date: Date;

  @Column()
  time: Date;

  @Column()
  score1: number;

  @Column()
  score2: number;

  @Column({ nullable: true })
  score1i: number;

  @Column({ nullable: true })
  score2i: number;

  @Column({ nullable: true })
  score1p: number;

  @Column({ nullable: true })
  score2p: number;

  @Column({ nullable: true })
  score1et: number;

  @Column({ nullable: true })
  score2et: number;

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
