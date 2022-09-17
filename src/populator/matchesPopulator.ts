import { AppDataSource } from "../data-source";
import { Country, Match, Round, Stadium, WorldCup } from "../entity";

import { matches } from './data/matches.json';

export default async function populateMatches() {

    const worldCupRepository = AppDataSource.getRepository(WorldCup);
    const countryRepository = AppDataSource.getRepository(Country);
    const roundRepository = AppDataSource.getRepository(Round);
    const matchRepository = AppDataSource.getRepository(Match);
    const stadiumRepository = AppDataSource.getRepository(Stadium);


    for (var i = 0; i < matches.length; i++) {
        const worldCupName = matches[i].name;
        const worldCup = await worldCupRepository.findOneBy({ name: worldCupName });

        for (var j = 0; j < matches[i].rounds.length; j++) {
            const round = matches[i].rounds[j];
            let existingRound = await roundRepository.findOneBy({ worldCup: worldCup, name: round.name });

            if (!existingRound) {
                existingRound = await roundRepository.save({ worldCup: worldCup, name: round.name });
            }

            for (var k = 0; k < round.matches.length; k++) {
                const match = round.matches[k];
                const existingMatch = await matchRepository.findOneBy({ matchNum: match.num, round: existingRound });
                if (!existingMatch) {
                    console.log(`Inserting ${match.team1.code} x ${match.team2.code} on ${worldCup.name}`)
                    const country1 = await countryRepository.findOneBy({ acronym: match.team1.code });
                    const country2 = await countryRepository.findOneBy({ acronym: match.team2.code });
                    let stadium = null;

                    if (!!match.stadium) {
                        stadium = await stadiumRepository.findOneBy({name: match.stadium.name})
                    } else {
                        console.log(`stadium for ${match.team1.code} x ${match.team2.code} on ${worldCup.name} not found`)
                    }
                    
                    const { score1, score2, score1i, score2i, score1p = null, score2p = null, score2et = null, score1et = null, date, time } = { ...match }
                    
                    await matchRepository.save({
                        country1,
                        country2,
                        score1, score2, score1i, score2i, score1p, score2p, stadium, score2et, round: existingRound, score1et, date, time, matchNum: match.num
                    })
                } else {
                    console.log(`Match ${match.team1.code} x ${match.team2.code} on ${worldCup.name} already exists`)
                }

            }
        }
    }

}