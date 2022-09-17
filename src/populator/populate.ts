import populateCountry from "./countryPopulator";
import populateGroup from "./groupPopulator";
import populateWorldCup from "./worldCupPopulator";

export default async function populate() {
    await populateWorldCup();
    await populateCountry();
    await populateGroup()
}