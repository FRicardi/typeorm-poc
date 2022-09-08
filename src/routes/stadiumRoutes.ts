import { StadiumController } from "../controller/StadiumController";

export const stadiumRoutes = [
  {
    method: "get",
    route: "/stadiums",
    controller: StadiumController,
    action: "all",
  },
  {
    method: "get",
    route: "/stadiums/:id",
    controller: StadiumController,
    action: "one",
  },
  {
    method: "post",
    route: "/stadiums",
    controller: StadiumController,
    action: "save",
  },
  {
    method: "delete",
    route: "/stadiums/:id",
    controller: StadiumController,
    action: "remove",
  },
];
