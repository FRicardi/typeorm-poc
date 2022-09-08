import { GroupController } from "../controller/GroupController";

export const groupRoutes = [
  {
    method: "get",
    route: "/groups",
    controller: GroupController,
    action: "all",
  },
  {
    method: "get",
    route: "/groups/:id",
    controller: GroupController,
    action: "one",
  },
  {
    method: "post",
    route: "/groups",
    controller: GroupController,
    action: "save",
  },
  {
    method: "delete",
    route: "/groups/:id",
    controller: GroupController,
    action: "remove",
  },
];
