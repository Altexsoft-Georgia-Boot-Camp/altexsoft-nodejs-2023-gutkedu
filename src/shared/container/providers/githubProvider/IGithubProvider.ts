import { IGetRepositoryResponseDTO } from "@modules/dtos/IOctokitDTO";

export interface IGithubProvider {
  getRepository(
    repo: string,
    owner: string
  ): Promise<IGetRepositoryResponseDTO>;
  getPaginatedCommits(repository: string, page: number): Promise<any>;
}
