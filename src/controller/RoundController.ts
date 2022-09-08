import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Round } from "../entity";

export class RoundController {
  private personRepository = AppDataSource.getRepository(Round);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.personRepository.find({ relations: ["matches"] });
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.personRepository.findOne({
      where: { id: request.params.id },
      relations: ["matches"],
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

  async allByWorldCup(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    return this.personRepository.findBy({
      worldCup: { id: request.params.id },
    });
  }
}
