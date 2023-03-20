import { GetRepositoriesController } from "@modules/useCases/getRepositories/getRepositoriesController";
import { Router } from "express";
import { GetRepoCommitsController } from "@modules/useCases/getRepoCommits/getRepoCommitsController";

const githubRoutes = Router();

const getRepositoriesController = new GetRepositoriesController();
const getRepoCommitsControler = new GetRepoCommitsController();

githubRoutes.get("/repo", getRepositoriesController.handle);
githubRoutes.get("/commits", getRepoCommitsControler.handle);

export { githubRoutes };
