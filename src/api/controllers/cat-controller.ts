import { Request, Response } from "express";
import { IRequester } from "../../domain/requester.interface";

export class CatController {

  constructor(
    private requester: IRequester
  ) {
  }

  private async fetchCatFact(): Promise<string> {
    const { fact } = await this.requester.get<any>('https://catfact.ninja/fact');
    return fact;
  }

  async getCatFact(req: Request, resp: Response) {
    const catFact = await this.fetchCatFact();
    resp.json({ message: catFact });
  }

}