import { ICreateRepoDTO } from "@modules/dtos/ICreateRepoDTO";
import { RepoEntity, RepoSchema } from "@modules/entities/Repo";
import { IRepoRepository } from "@modules/repositories/interface/IRepoRepository";
import { redisOmClient } from "@shared/infra/redis/redis-om";
import { Repository } from "redis-om";
import { injectable } from "tsyringe";

@injectable()
export class RepoRepository implements IRepoRepository {
  private readonly repository: Repository<RepoEntity>;

  constructor() {
    this.repository = redisOmClient.fetchRepository(RepoSchema);
  }

  async create(data: ICreateRepoDTO): Promise<RepoEntity> {
    const newRepo = await this.repository.createAndSave({
      repo: data.repo,
      owner: data.owner,
      counter: data.counter,
    });
    return newRepo;
  }

  async getRepo(repo: string): Promise<RepoEntity> {
    return this.repository.search().where("repo").equal(repo).return.first();
  }

  async incrementRepoCounter(entityId: string): Promise<void> {
    const repo = await this.repository.fetch(entityId);
    repo.counter += 1;
    await this.repository.save(repo);
  }

  async getRepositories(): Promise<RepoEntity[]> {
    return this.repository.search().return.returnAll();
  }
}
