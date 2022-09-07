import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Group } from "./Group";
import { Person } from "./Person";
import { WorldCup } from "./WorldCup";

@Entity()
export class Country {
  @PrimaryColumn()
  acronym: string;

  @ManyToOne(() => Group, (group) => group.countries)
  group: Group;

  @ManyToOne(() => WorldCup, (worldcup) => worldcup.countries)
  worldCup: WorldCup;

  @Column()
  name: string;

  @Column()
  continent: string;

  @OneToMany(() => Person, (person) => person.country)
  people: Person[];
}
