import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Country } from "./Country";
import { WorldCup } from "./WorldCup";

@Entity()
export class Stadium {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @ManyToOne(() => WorldCup, (worldcup) => worldcup.stadiums)
  worldCup: WorldCup;

  @Column()
  name: string;

  @Column()
  capacity: number;

  @Column()
  city: string;
}
