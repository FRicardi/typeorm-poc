import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Person } from "../entity/Person";

export class PersonController {
  private personRepository = AppDataSource.getRepository(Person);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.personRepository.find({ relations: ["country"] });
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.personRepository.findOne({
      where: { id: request.params.id },
      relations: ["country"],
    });
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return this.personRepository.save(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let personToRemove = await this.personRepository.findOneBy({
      id: request.params.id,
    });
    await this.personRepository.remove(personToRemove);
    return personToRemove;
  }

  async allByCountryAcronym(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    return this.personRepository.findBy({
      country: { acronym: request.params.id },
    });
  }
}
