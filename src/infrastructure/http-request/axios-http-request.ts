import axios from "axios";
import { IHttpRequest } from "../../domain/http-request/http-request.interface";
import { injectable } from "inversify";

@injectable()
export class AxiosHttpRequest implements IHttpRequest {

  async get<T>(url: string): Promise<T> {
    const { data } = await axios.get<T>(url);
    return data;
  }

}