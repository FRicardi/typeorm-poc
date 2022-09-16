import populateCountry from "./countryPopulator";
import populateWorldCup from "./worldCupPopulator";

export default async function populate() {
    await populateWorldCup();
    await populateCountry();
}