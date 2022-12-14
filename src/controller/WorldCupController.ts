import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { WorldCup } from "../entity";

export class WorldCupController {
  private worldCupRepository = AppDataSource.getRepository(WorldCup);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.worldCupRepository.find({
      relations: {
        groups: {
          countries: true,
        },
        stadiums: true,
        rounds: true,
      },
    });
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.worldCupRepository.findOne({
      where: { id: request.params.id },
      relations: {
        groups: {
          countries: true,
        },
        stadiums: true,
        rounds: true,
      },
    });
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return this.worldCupRepository.save(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let worldCupToRemove = await this.worldCupRepository.findOneBy({
      id: request.params.id,
    });
    await this.worldCupRepository.remove(worldCupToRemove);
    return worldCupToRemove;
  }
}
