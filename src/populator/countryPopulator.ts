import { AppDataSource } from "../data-source";
import { Country } from "../entity";

import {teams} from './data/teams.json';

export default async function populateCountry() {

    const countryRepository = AppDataSource.getRepository(Country);

    teams.forEach(async (team) => {
        const existingCountry = await countryRepository.findOneBy({acronym: team.code})
        if (!existingCountry) {
            console.log(`Inserting ${team.code}...`)
            await countryRepository.save({
                acronym: team.code,
                name: team.name,
                continent: team.continent
            })
        } else {
            console.log(`Country ${team.code} already inserted`)
        }
    })
    
}