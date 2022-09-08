import "reflect-metadata";
import { DataSource } from "typeorm";
import * as entities from "./entity";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "database.sqlite",
  synchronize: true,
  logging: false,
  entities,
  migrations: [],
  subscribers: [],
});
