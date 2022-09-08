import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { WorldCup } from "../entity";

export class WorldCupController {
  private personRepository = AppDataSource.getRepository(WorldCup);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.personRepository.find({
      relations: ["countries", "groups", "stadiums", "rounds"],
    });
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.personRepository.findOne({
      where: { id: request.params.id },
      relations: ["countries", "groups", "stadiums", "rounds"],
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
}
