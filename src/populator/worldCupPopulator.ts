import { AppDataSource } from "../data-source";
import { WorldCup } from "../entity";
import { cups } from "./data/worldCup.json";

export default async function populateWorldCup() {
  const worldCupRepository = AppDataSource.getRepository(WorldCup);

  for (var i = 0; i < cups.length; i++) {
    const existingCup = await worldCupRepository.findOneBy({ name: cups[i] });
    if (!existingCup) {
      console.log(`Inserting cup ${cups[i]}`);
      await worldCupRepository.save({ name: cups[i] });
    } else {
      console.log(`Cup ${cups[i]} already inserted`);
    }
  }
}
