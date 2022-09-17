import { AppDataSource } from "../data-source";
import { Country } from "../entity";

import {teams} from './data/teams.json';

export default async function populateCountry() {

    const countryRepository = AppDataSource.getRepository(Country);

    for (var i = 0; i < teams.length; i++) {
        const existingCountry = await countryRepository.findOneBy({acronym: teams[i].code})
        if (!existingCountry) {
            console.log(`Inserting ${teams[i].code}...`)
            await countryRepository.save({
                acronym: teams[i].code,
                name: teams[i].name,
                continent: teams[i].continent
            })
        } else {
            console.log(`Country ${teams[i].code} already inserted`)
        }
    }
    
}