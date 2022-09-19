import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Stadium } from "../entity";

export class StadiumController {
  private stadiumRepository = AppDataSource.getRepository(Stadium);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.stadiumRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.stadiumRepository.findOne({
      where: { id: request.params.id },
    });
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return this.stadiumRepository.save(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let stadiumToRemove = await this.stadiumRepository.findOneBy({
      id: request.params.id,
    });
    await this.stadiumRepository.remove(stadiumToRemove);
    return stadiumToRemove;
  }

  async allByWorldCup(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    return this.stadiumRepository.findBy({
      worldCup: { id: request.params.id },
    });
  }
}
