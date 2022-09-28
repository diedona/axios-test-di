import "reflect-metadata";
import { Container } from "inversify";
import { CatController } from "./controllers/cat-controller";
import { IRequester } from "../domain/requester.interface";
import { AxiosRequester } from "../infrastructure/http-request/axios-requester";
import { TYPES } from "../infrastructure/types";

const container = new Container();
container.bind<IRequester>(TYPES.IRequester).to(AxiosRequester);
container.bind<CatController>(CatController).toSelf();

export { container };