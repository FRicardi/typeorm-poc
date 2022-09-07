import "reflect-metadata";
import { DataSource } from "typeorm";
import { Country } from "./entity/Country";
import { Person } from "./entity/Person";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "database.sqlite",
  synchronize: true,
  logging: false,
  entities: [Country, Person],
  migrations: [],
  subscribers: [],
});
