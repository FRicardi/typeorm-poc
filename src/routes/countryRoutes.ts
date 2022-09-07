import { CountryController } from "../controller/CountryController";

export const countryRoutes = [
  {
    method: "get",
    route: "/countries",
    controller: CountryController,
    action: "all",
  },
  {
    method: "get",
    route: "/countries/:acronym",
    controller: CountryController,
    action: "one",
  },
  {
    method: "post",
    route: "/countries",
    controller: CountryController,
    action: "save",
  },
  {
    method: "delete",
    route: "/countries/:acronym",
    controller: CountryController,
    action: "remove",
  },
];
