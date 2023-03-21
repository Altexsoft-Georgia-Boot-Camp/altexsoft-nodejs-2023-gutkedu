import { IGetCommitsDTO } from "@modules/dtos/IGetCommitsDTO";
import { IGetRepoResponseDTO } from "@modules/dtos/IGetReposDTO";
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
  ): Promise<IGetCommitsDTO[]> {
    try {
      const { data } = await this.octokit.request(
        `GET /repos/${owner}/${repo}/commits?page=1&per_page=10`
      );

      const commits: IGetCommitsDTO[] = data.map((c) => {
        return {
          sha: c.sha,
          commit: {
            author: c.commit.author.name,
            email: c.commit.author.email,
            date: c.commit.author.date,
          },
          committer: {
            name: c.commit.committer.name,
            email: c.commit.committer.email,
            date: c.commit.committer.date,
          },
          message: c.commit.message,
        };
      });

      return commits;
    } catch (error) {
      throw new AppError("Repository not found", 404);
    }
  }

  async getRepository(
    repo: string,
    owner: string
  ): Promise<IGetRepoResponseDTO> {
    try {
      const { data } = await this.octokit.rest.repos.get({
        owner,
        repo,
      });
      return {
        id: data.id,
        name: data.name,
        full_name: data.full_name,
        private: data.private,
        owner: {
          id: data.owner.id,
          login: data.owner.login,
          avatar_url: data.owner.avatar_url,
          url: data.owner.url,
        },
        html_url: data.html_url,
        description: data.description,
      };
    } catch (error) {
      throw new AppError("Repository not found", 404);
    }
  }
}
