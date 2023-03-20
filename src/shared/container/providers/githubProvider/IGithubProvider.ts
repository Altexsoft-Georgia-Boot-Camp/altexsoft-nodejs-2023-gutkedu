import { IGetCommitResponseDTO } from "@modules/dtos/IGetCommitsDTO";
import { IGetRepoResponseDTO } from "@modules/dtos/IGetReposDTO";

export interface IGithubProvider {
  getRepository(repo: string, owner: string): Promise<IGetRepoResponseDTO>;
  getPaginatedCommits(
    repo: string,
    owner: string
  ): Promise<IGetCommitResponseDTO[]>;
}
