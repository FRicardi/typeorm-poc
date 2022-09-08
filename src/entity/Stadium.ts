import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Country } from "./Country";
import { WorldCup } from "./WorldCup";

@Entity()
export class Stadium {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  name: string;

  @Column()
  capacity: number;

  @Column()
  city: string;

  @ManyToOne(() => WorldCup, (worldCup) => worldCup.stadiums)
  worldCup: WorldCup;
}
