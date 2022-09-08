import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Country } from "../entity";

export class CountryController {
  private countryRepository = AppDataSource.getRepository(Country);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.countryRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.countryRepository.findOneBy({
      acronym: request.params.acronym,
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
}
