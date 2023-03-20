import { container } from "tsyringe";
import { IGithubProvider } from "@shared/container/providers/githubProvider/IGithubProvider";
import { OctokitProvider } from "@shared/container/providers/githubProvider/implementations/OctokitProvider";

container.registerSingleton<IGithubProvider>("GithubProvider", OctokitProvider);
