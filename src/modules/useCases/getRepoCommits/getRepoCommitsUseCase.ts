import { IGetCommitResponseDTO } from "@modules/dtos/IGetCommitsDTO";
import { IGithubProvider } from "@shared/container/providers/githubProvider/IGithubProvider";
import { inject, injectable } from "tsyringe";

@injectable()
export class GetRepoCommitsUseCase {
  constructor(
    @inject("GithubProvider")
    private githubProvider: IGithubProvider
  ) {}

  async execute(repo: string, owner: string): Promise<IGetCommitResponseDTO[]> {
    const commits = await this.githubProvider.getPaginatedCommits(repo, owner);
    return commits;
  }
}
