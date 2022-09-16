import { AppDataSource } from "../data-source";
import { WorldCup } from "../entity";
import {cups} from './data/worldCup.json';

export default async function populateWorldCup() {
    const worldCupRepository = AppDataSource.getRepository(WorldCup);

    cups.forEach(async (cup) => {
        const existingCup = await worldCupRepository.findOneBy({name: cup});
        if (!existingCup) {
            console.log(`Inserting cup ${cup}`)
            await worldCupRepository.save({name: cup});
        } else {
            console.log(`Cup ${cup} already inserted`)
        }
    })
    
}