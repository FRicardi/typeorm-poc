import { AppDataSource } from "../data-source";
import { Country, Group, WorldCup } from "../entity";

import {groups} from './data/groups.json';

export default async function populateGroup() {

    const groupRepository = AppDataSource.getRepository(Group);
    const worldCupRepository = AppDataSource.getRepository(WorldCup);
    const countryRepository = AppDataSource.getRepository(Country);

    for (var i = 0; i < groups.length; i++) {
        const worldCupName = groups[i].name;
        const worldCup = await worldCupRepository.findOneBy({name: worldCupName});
        for (var j = 0; j < groups[i].groups.length; j++) {
            const groupName = groups[i].groups[j].name;
            const existingGroup = await groupRepository.findOneBy({worldCup: worldCup, name: groupName});
            if (!existingGroup) {
                const groupItem = groups[i].groups[j];
                console.log(`Inserting ${groupName} ${worldCupName}...`)
                const countries = [];
                for (var k = 0; k < groupItem.teams.length; k++) {
                    const country = await countryRepository.findOneBy({acronym: groupItem.teams[k]})
                    countries.push(country)
                }                
                await groupRepository.save({
                    worldCup: worldCup,
                    name: groupName,
                    countries
                })
            } else {
                console.log(`Group ${groupName} ${worldCupName} already inserted`)
            }
        }
    }
    
}