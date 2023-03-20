import { ICreateRepoDTO } from "@modules/dtos/ICreateRepoDTO";
import { RepoEntity } from "@modules/entities/Repo";

export interface IRepoRepository {
  create(data: ICreateRepoDTO): Promise<RepoEntity>;
  getRepositories(): Promise<RepoEntity[]>;
  getRepo(repo: string): Promise<RepoEntity>;
  incrementRepoCounter(entityId: string): Promise<void>;
}
