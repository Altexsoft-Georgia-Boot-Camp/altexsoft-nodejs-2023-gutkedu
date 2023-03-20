import { GetRepositoriesController } from "@modules/useCases/getRepositories/getRepositoriesController";
import { Router } from "express";
import { isRepoCached } from "@shared/infra/http/middlewares/isRepoCached";
import { GetRepoCommitsController } from "@modules/useCases/getRepoCommits/getRepoCommitsController";

const githubRoutes = Router();

const getRepositoriesController = new GetRepositoriesController();
const getRepoCommitsControler = new GetRepoCommitsController();

githubRoutes.get("/repo", isRepoCached, getRepositoriesController.handle);
githubRoutes.get("/commits", getRepoCommitsControler.handle);

export { githubRoutes };
