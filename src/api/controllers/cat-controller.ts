import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import IocIdentifiers from "../../domain/constants/identifiers";
import { IHttpRequest } from "../../domain/http-request/http-request.interface";

@injectable()
export class CatController {

  constructor(
    @inject(IocIdentifiers.IHttpRequest) private httpRequest: IHttpRequest
  ) {
  }

  private async fetchCatFact(): Promise<string> {
    const { fact } = await this.httpRequest.get<any>('https://catfact.ninja/fact');
    return fact;
  }

  async getCatFact(req: Request, resp: Response) {
    const catFact = await this.fetchCatFact();
    resp.json({ message: catFact });
  }

}