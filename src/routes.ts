import { countryRoutes } from "./routes/countryRoutes";
import { personRoutes } from "./routes/personRoutes";
import { groupRoutes } from "./routes/groupRoutes";
import { worldCupRoutes } from "./routes/worldCupRoutes";
import { roundsRoutes } from "./routes/roundsRoutes";
import { stadiumRoutes } from "./routes/stadiumRoutes";

export const Routes = [
  ...countryRoutes,
  ...personRoutes,
  ...groupRoutes,
  ...worldCupRoutes,
  ...roundsRoutes,
  ...stadiumRoutes,
];
