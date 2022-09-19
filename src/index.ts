import * as express from "express";
import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import { AppDataSource } from "./data-source";
import { Routes } from "./routes";

AppDataSource.initialize()
  .then(async () => {
    const app = express();
    app.use(bodyParser.json());

    Routes.forEach((route) => {
      (app as any)[route.method](
        route.route,
        (req: Request, res: Response, next: Function) => {
          const result = new (route.controller as any)()[route.action](
            req,
            res,
            next
          );
          if (result instanceof Promise) {
            result.then((result) =>
              result !== null && result !== undefined
                ? res.send(result)
                : undefined
            );
          } else if (result !== null && result !== undefined) {
            res.json(result);
          }
        }
      );
    });
    app.listen(3000);
    console.log(
      `Express server has started on port 3000. To see results, open:
> http://localhost:3000/countries
> http://localhost:3000/groups
> http://localhost:3000/people
> http://localhost:3000/rounds
> http://localhost:3000/stadiums
> http://localhost:3000/worldCups`
    );
  })
  .catch((error) => console.log(error));
