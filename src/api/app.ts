import express, { NextFunction, Request, Response } from "express";
import { catRoutes } from "./routes/cat-routes";
import { peopleRoutes } from "./routes/people-routes";

export class Application {

  public server: express.Application;

  constructor() {
    this.server = express();
    this.middleware();
    this.routes();

    this.errorMiddleware();
  }

  private middleware(): void {
    this.server.use(express.json());
  }

  private routes() {
    this.server.use('/people', peopleRoutes);
    this.server.use('/cat', catRoutes);
  }

  private errorMiddleware() {
    this.server.use((error: Error, req: Request, response: Response, next: NextFunction) => {
      console.error('erro:', error);

      return response.json({ message: 'Ocorreu um erro ao processar requisição.' });
    });
  }

}