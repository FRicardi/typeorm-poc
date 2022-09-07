import { PersonController } from "../controller/PersonController";

export const personRoutes = [
  {
    method: "get",
    route: "/people",
    controller: PersonController,
    action: "all",
  },
  {
    method: "get",
    route: "/people/:id",
    controller: PersonController,
    action: "one",
  },
  {
    method: "post",
    route: "/people",
    controller: PersonController,
    action: "save",
  },
  {
    method: "delete",
    route: "/people/:id",
    controller: PersonController,
    action: "remove",
  },
  {
    method: "get",
    route: "/people/country/:acronym",
    controller: PersonController,
    action: "allByCountryAcronym",
  },
];
