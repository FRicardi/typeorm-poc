import populateCountry from "./countryPopulator";
import populateGroup from "./groupPopulator";
import populateMatches from "./matchesPopulator";
import populateStadiums from "./stadiumPopulator";
import populateWorldCup from "./worldCupPopulator";

export default async function populate() {
    await populateWorldCup();
    await populateCountry();
    await populateGroup();
    await populateStadiums();
    await populateMatches();
}