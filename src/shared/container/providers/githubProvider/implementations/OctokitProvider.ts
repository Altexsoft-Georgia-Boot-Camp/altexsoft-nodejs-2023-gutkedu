import { IGetRepositoryResponseDTO } from "@modules/dtos/IOctokitDTO";
import { IGithubProvider } from "@shared/container/providers/githubProvider/IGithubProvider";
import { AppError } from "@shared/errors/AppError";
import { Octokit } from "octokit";

export class OctokitProvider implements IGithubProvider {
  private readonly octokit;

  constructor() {
    this.octokit = new Octokit();
  }
  async getPaginatedCommits(repository: string, page: number): Promise<any> {
    try {
      const { data } = await this.octokit.request(
        `GET /repos/${repository}/commits?page=${page}`
      );
      return data;
    } catch (error) {
      throw new AppError("Repository not found", 404);
    }
  }

  async getRepository(
    repo: string,
    owner: string
  ): Promise<IGetRepositoryResponseDTO> {
    try {
      const { data } = await this.octokit.rest.repos.get({
        owner,
        repo,
      });
      return data;
    } catch (error) {
      throw new AppError("Repository not found", 404);
    }
  }
}
