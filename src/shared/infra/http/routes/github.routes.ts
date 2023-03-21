import { GetRepositoriesController } from "@modules/useCases/getRepositories/getRepositoriesController";
import { Router } from "express";
import { GetRepoCommitsController } from "@modules/useCases/getRepoCommits/getRepoCommitsController";
import { GetSearchedReposController } from "@modules/useCases/getSearchedRepos/getSearchedReposController";

const githubRoutes = Router();

const getRepositoriesController = new GetRepositoriesController();
const getRepoCommitsControler = new GetRepoCommitsController();
const getSearchedReposController = new GetSearchedReposController();

githubRoutes.get("/repo", getRepositoriesController.handle);
githubRoutes.get("/commits", getRepoCommitsControler.handle);
githubRoutes.get("/searched", getSearchedReposController.handle);

export { githubRoutes };
