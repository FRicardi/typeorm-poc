import { AppDataSource } from "../data-source";
import { Country, Federation } from "../entity";

import { teams } from "./data/teams.json";

export default async function populateCountry() {
  const countryRepository = AppDataSource.getRepository(Country);
  const federationRepository = AppDataSource.getRepository(Federation);

  for (var i = 0; i < teams.length; i++) {
    const country = teams[i];
    const existingCountry = await countryRepository.findOneBy({
      acronym: country.code,
    });
    if (!existingCountry) {
      console.log(`Inserting ${teams[i].code}...`);
      let assoc = null;
      if (country.assoc) {
        assoc = await federationRepository.save({
          name: country.assoc.name,
        });
      }
      await countryRepository.save({
        acronym: teams[i].code,
        name: teams[i].name,
        continent: teams[i].continent,
        federation: assoc,
      });
    } else {
      console.log(`Country ${teams[i].code} already inserted`);
    }
  }
}
