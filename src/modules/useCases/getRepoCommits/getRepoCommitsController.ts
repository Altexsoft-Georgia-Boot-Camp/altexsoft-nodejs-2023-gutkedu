import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetRepoCommitsUseCase } from "./getRepoCommitsUseCase";

export class GetRepoCommitsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const getRepoCommits = container.resolve(GetRepoCommitsUseCase);

    const repo = request.query.repo as string;
    const owner = request.query.owner as string;

    const commits = await getRepoCommits.execute(repo, owner);

    console.log(commits.length);

    return response.send(commits).status(200);
  }
}
