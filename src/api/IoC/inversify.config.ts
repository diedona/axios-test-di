import "reflect-metadata";
import { Container } from "inversify";
import { CatController } from "../controllers/cat-controller";
import { IHttpRequest } from "../../domain/http-request/http-request.interface";
import IocIdentifiers from "../../domain/constants/identifiers";
import { AxiosHttpRequest } from "../../infrastructure/http-request/axios-http-request";

const container = new Container();
container.bind<IHttpRequest>(IocIdentifiers.IHttpRequest).to(AxiosHttpRequest);
container.bind<CatController>(CatController).toSelf();

export { container };