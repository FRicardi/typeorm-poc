import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Country } from "./Country";
import { Match } from "./Match";

@Entity()
export class Goal {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @ManyToOne(() => Match)
  math: Match;

  @Column()
  name: string;

  @Column()
  minute: number;
}
