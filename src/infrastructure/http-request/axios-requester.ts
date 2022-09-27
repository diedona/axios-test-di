import { IRequester } from "../../domain/requester.interface";
import axios, { AxiosStatic } from "axios";

export class AxiosRequester implements IRequester {

  private _axios: AxiosStatic = axios;

  async get<T>(url: string): Promise<T> {
    const { data } = await this._axios.get<T>(url);
    return data;
  }

}