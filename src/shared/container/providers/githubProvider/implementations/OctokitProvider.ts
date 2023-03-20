import { IGetCommitResponseDTO } from "@modules/dtos/IGetCommitsDTO";
import { IGetRepositoryResponseDTO } from "@modules/dtos/IGetReposDTO";
import { IGithubProvider } from "@shared/container/providers/githubProvider/IGithubProvider";
import { AppError } from "@shared/errors/AppError";
import { Octokit } from "octokit";

export class OctokitProvider implements IGithubProvider {
  private readonly octokit;

  constructor() {
    this.octokit = new Octokit();
  }
  async getPaginatedCommits(
    repo: string,
    owner: string
  ): Promise<IGetCommitResponseDTO[]> {
    try {
      const { data } = await this.octokit.request(
        `GET /repos/${owner}/${repo}/commits?page=1&per_page=10`
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
