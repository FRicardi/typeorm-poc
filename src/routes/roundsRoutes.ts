import { RoundController } from "../controller/RoundController";

export const roundsRoutes = [
  {
    method: "get",
    route: "/rounds",
    controller: RoundController,
    action: "all",
  },
  {
    method: "get",
    route: "/rounds/:id",
    controller: RoundController,
    action: "one",
  },
  {
    method: "post",
    route: "/rounds",
    controller: RoundController,
    action: "save",
  },
  {
    method: "delete",
    route: "/rounds/:id",
    controller: RoundController,
    action: "remove",
  },
];
