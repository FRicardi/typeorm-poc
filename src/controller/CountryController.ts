import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Country, WorldCup } from "../entity";

export class CountryController {
  private countryRepository = AppDataSource.getRepository(Country);
  private worldCupRepository = AppDataSource.getRepository(WorldCup);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.countryRepository.find({ relations: ["federation"] });
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.countryRepository.findOne({
      where: {
        acronym: request.params.acronym,
      },
      relations: ["federation"],
    });
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return this.countryRepository.save(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let countryToRemove = await this.countryRepository.findOneBy({
      acronym: request.params.acronym,
    });

    await this.countryRepository.remove(countryToRemove);
    return countryToRemove;
  }

  async cupParticipations(request: Request) {
    let country = await this.countryRepository.findOneBy({
      acronym: request.params.acronym,
    });
    if (!country) {
      throw new Error();
    }

    return this.worldCupRepository.find({
      where: {
        groups: {
          countries: country,
        },
      },
      order: {
        name: "ASC",
      },
    });
  }
}
