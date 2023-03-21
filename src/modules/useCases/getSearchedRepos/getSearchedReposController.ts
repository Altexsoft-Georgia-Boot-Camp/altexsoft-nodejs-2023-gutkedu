import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetSearchedReposUseCase } from "./getSearchedReposUseCase";

export class GetSearchedReposController {
  async handle(_request: Request, response: Response): Promise<Response> {
    const getSearchedReposUseCase = container.resolve(GetSearchedReposUseCase);
    const repositoryData = await getSearchedReposUseCase.execute();
    return response.send(repositoryData).status(200);
  }
}
