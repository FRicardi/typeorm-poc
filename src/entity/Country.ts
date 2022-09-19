import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { Federation } from "./Federation";
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

  @OneToOne(() => Federation)
  @JoinColumn()
  federation: Federation
}
