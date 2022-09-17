import { AppDataSource } from "../data-source";
import { Stadium, WorldCup } from "../entity";

import {stadiums} from './data/stadiums.json';

export default async function populateStadiums() {

    const worldCupRepository = AppDataSource.getRepository(WorldCup);
    const stadiumRepository = AppDataSource.getRepository(Stadium);

    for (var i = 0; i < stadiums.length; i++) {
        const worldCupName = stadiums[i].name;
        const worldCup = await worldCupRepository.findOneBy({name: worldCupName});
        for (var j = 0; j < stadiums[i].stadiums.length; j++) {
            const stadium = stadiums[i].stadiums[j];
            const existingStadium = await stadiumRepository.findOneBy({worldCup: worldCup, name: stadium.name});
            if (!existingStadium) {
                console.log(`Inserting ${stadium.name} ${worldCupName}...`)
                await stadiumRepository.save({
                    worldCup: worldCup,
                    name: stadium.name,
                    capacity: stadium.capacity,
                    city: stadium.city
                });
            } else {
                console.log(`Stadium ${stadium.name} ${worldCupName} already inserted`)
            }
        }
    }
    
}