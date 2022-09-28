import { Request, Response } from "express";
import { IRequester } from "../../domain/requester.interface";
import { TYPES } from "../../infrastructure/types";
import { inject, injectable } from "inversify";

@injectable()
export class CatController {

  constructor(
    @inject(TYPES.IRequester) private requester: IRequester
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