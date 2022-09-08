import { WorldCupController } from "../controller/WorldCupController";

export const worldCupRoutes = [
  {
    method: "get",
    route: "/worldCups",
    controller: WorldCupController,
    action: "all",
  },
  {
    method: "get",
    route: "/worldCups/:id",
    controller: WorldCupController,
    action: "one",
  },
  {
    method: "post",
    route: "/worldCups",
    controller: WorldCupController,
    action: "save",
  },
  {
    method: "delete",
    route: "/worldCups/:id",
    controller: WorldCupController,
    action: "remove",
  },
];
