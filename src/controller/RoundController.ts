import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Round } from "../entity";

export class RoundController {
  private roundRepository = AppDataSource.getRepository(Round);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.roundRepository.find({ relations: ["matches"] });
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.roundRepository.findOne({
      where: { id: request.params.id },
      relations: ["matches"],
    });
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return this.roundRepository.save(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let personToRemove = await this.roundRepository.findOneBy({
      id: request.params.id,
    });
    await this.roundRepository.remove(personToRemove);
    return personToRemove;
  }

  async allByWorldCup(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    return this.roundRepository.findBy({
      worldCup: { id: request.params.id },
    });
  }
}
