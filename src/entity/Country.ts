import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Group } from "./Group";
import { Person } from "./Person";
import { WorldCup } from "./WorldCup";

@Entity()
export class Country {
  @PrimaryColumn()
  acronym: string;

  @Column()
  name: string;

  @Column()
  continent: string;

  @ManyToOne(() => WorldCup, (worldCup) => worldCup.countries)
  worldCup: WorldCup;

  @ManyToOne(() => Group, (group) => group.countries)
  group: Group;

  @OneToMany(() => Person, (person) => person.country)
  people: Person[];
}
