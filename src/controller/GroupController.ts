import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Group } from "../entity";

export class GroupController {
  private groupRepository = AppDataSource.getRepository(Group);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.groupRepository.find({ relations: ["countries", "worldCup"] });
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.groupRepository.findOne({
      where: { id: request.params.id },
      relations: ["countries"],
    });
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return this.groupRepository.save(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let personToRemove = await this.groupRepository.findOneBy({
      id: request.params.id,
    });
    await this.groupRepository.remove(personToRemove);
    return personToRemove;
  }

  async allByWorldCup(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    return this.groupRepository.findBy({
      worldCup: { id: request.params.id },
    });
  }
}
