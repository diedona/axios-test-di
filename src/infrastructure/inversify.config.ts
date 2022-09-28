import { Container } from "inversify";
import { IRequester } from "../domain/requester.interface";
import { AxiosRequester } from "./http-request/axios-requester";
import { TYPES } from "./types";

const container = new Container();
container.bind<IRequester>(TYPES.IRequester).to(AxiosRequester);

export { container };