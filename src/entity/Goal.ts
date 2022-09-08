import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Match } from "./Match";

@Entity()
export class Goal {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  name: string;

  @Column()
  minute: number;

  @ManyToOne(() => Match)
  math: Match;
}
