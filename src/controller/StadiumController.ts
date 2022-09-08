import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Stadium } from "../entity";

export class StadiumController {
  private personRepository = AppDataSource.getRepository(Stadium);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.personRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.personRepository.findOne({
      where: { id: request.params.id },
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
