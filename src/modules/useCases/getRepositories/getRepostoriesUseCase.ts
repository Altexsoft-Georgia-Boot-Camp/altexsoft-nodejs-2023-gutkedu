import { cacheConfig } from "@config/redis";
import { IGetRepositoryResponseDTO } from "@modules/dtos/IGetReposDTO";
import { IGithubProvider } from "@shared/container/providers/githubProvider/IGithubProvider";
import { redisClient } from "@shared/infra/redis/client";
import { inject, injectable } from "tsyringe";

@injectable()
export class GetRepositoriesUseCase {
  constructor(
    @inject("GithubProvider")
    private githubProvider: IGithubProvider
  ) {}

  async execute(
    repo: string,
    owner: string
  ): Promise<IGetRepositoryResponseDTO> {
    const repositoryData = await this.githubProvider.getRepository(repo, owner);

    await redisClient.setEx(
      repo,
      cacheConfig.cacheTimeInSeconds,
      JSON.stringify(repositoryData)
    );

    return repositoryData;
  }
}
