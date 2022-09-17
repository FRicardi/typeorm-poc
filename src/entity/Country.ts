import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
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

  @ManyToMany(() => Group, (group) => group.countries, { cascade: true })
  @JoinTable({
    joinColumn: { referencedColumnName: "acronym" }
  })
  group: Group;

  @OneToMany(() => Person, (person) => person.country)
  people: Person[];
}
