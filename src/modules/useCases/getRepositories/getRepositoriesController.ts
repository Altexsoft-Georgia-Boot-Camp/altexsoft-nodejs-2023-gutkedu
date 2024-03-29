import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetRepositoriesUseCase } from "@modules/useCases/getRepositories/getRepostoriesUseCase";

export class GetRepositoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const getRepositoriesUseCase = container.resolve(GetRepositoriesUseCase);

    const repositoryData = await getRepositoriesUseCase.execute({
      owner: request.query.owner as string,
      repo: request.query.repo as string,
    });

    return response.send(repositoryData).status(200);
  }
}
