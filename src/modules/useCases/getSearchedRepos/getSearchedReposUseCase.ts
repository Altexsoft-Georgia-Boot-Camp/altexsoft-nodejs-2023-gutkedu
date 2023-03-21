import { RepoEntity } from "@modules/entities/Repo";
import { IRepoRepository } from "@modules/repositories/interface/IRepoRepository";
import { inject, injectable } from "tsyringe";

@injectable()
export class GetSearchedReposUseCase {
  constructor(
    @inject("RepoRepository")
    private repoRepository: IRepoRepository
  ) {}

  async execute(): Promise<RepoEntity[]> {
    const repos = await this.repoRepository.getRepositories();
    return repos;
  }
}
