import axios from "axios";
import { IRequester } from "../../domain/requester.interface";
import { injectable } from "inversify";
import "reflect-metadata";

@injectable()
export class AxiosRequester implements IRequester {

  async get<T>(url: string): Promise<T> {
    const { data } = await axios.get<T>(url);
    return data;
  }

}