import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetSearchedReposUseCase } from "./getSearchedReposUseCase";

export class GetSearchedReposController {
  async handle(_request: Request, response: Response): Promise<Response> {
    const getSearchedReposUseCase = container.resolve(GetSearchedReposUseCase);
    const repositoryData = await getSearchedReposUseCase.execute();

    if (repositoryData.length === 0) {
      return response.status(404).json({ message: "No repositories found" });
    }

    return response.send(repositoryData).status(200);
  }
}
