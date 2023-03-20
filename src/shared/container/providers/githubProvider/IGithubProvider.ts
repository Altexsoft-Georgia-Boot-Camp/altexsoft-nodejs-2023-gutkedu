import { IGetCommitResponseDTO } from "@modules/dtos/IGetCommitsDTO";
import { IGetRepositoryResponseDTO } from "@modules/dtos/IGetReposDTO";

export interface IGithubProvider {
  getRepository(
    repo: string,
    owner: string
  ): Promise<IGetRepositoryResponseDTO>;
  getPaginatedCommits(
    repo: string,
    owner: string
  ): Promise<IGetCommitResponseDTO[]>;
}
