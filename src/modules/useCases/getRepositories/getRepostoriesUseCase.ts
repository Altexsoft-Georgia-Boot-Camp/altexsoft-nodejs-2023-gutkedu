import { ICreateRepoDTO } from "@modules/dtos/ICreateRepoDTO";
import { IGetRepositoryResponseDTO } from "@modules/dtos/IGetReposDTO";
import { IRepoRepository } from "@modules/repositories/interface/IRepoRepository";
import { IGithubProvider } from "@shared/container/providers/githubProvider/IGithubProvider";
import { inject, injectable } from "tsyringe";

@injectable()
export class GetRepositoriesUseCase {
  constructor(
    @inject("GithubProvider")
    private githubProvider: IGithubProvider,
    @inject("RepoRepository")
    private repoRepository: IRepoRepository
  ) {}

  async execute(payload: ICreateRepoDTO): Promise<IGetRepositoryResponseDTO> {
    const repositoryData = await this.githubProvider.getRepository(
      payload.repo,
      payload.owner
    );

    const repoExist = await this.repoRepository.getRepo(payload.repo);
    if (repoExist) {
      await this.repoRepository.incrementRepoCounter(repoExist.entityId);
    } else {
      await this.repoRepository.create({
        repo: payload.repo,
        owner: payload.owner,
        counter: 1,
      });
    }

    return repositoryData;
  }
}
