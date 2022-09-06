import "reflect-metadata"
import { DataSource } from "typeorm"
import { Country } from "./entity/Country"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "database.sqlite",
    synchronize: true,
    logging: false,
    entities: [Country],
    migrations: [],
    subscribers: [],
})
