import { container } from "tsyringe";
import "../container/providers";

import { IRepoRepository } from "@modules/repositories/interface/IRepoRepository";
import { RepoRepository } from "@modules/repositories/RepoRepository";

container.registerSingleton<IRepoRepository>("RepoRepository", RepoRepository);
