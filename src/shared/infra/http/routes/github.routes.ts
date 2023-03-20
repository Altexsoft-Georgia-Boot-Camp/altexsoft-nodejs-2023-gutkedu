import { GetRepositoriesController } from "@modules/useCases/getRepositories/getRepositoriesController";
import { Router } from "express";
import { isRepoCached } from "@shared/infra/http/middlewares/isRepoCached";

const githubRoutes = Router();

const getRepositoriesController = new GetRepositoriesController();

githubRoutes.get("/repo", isRepoCached, getRepositoriesController.handle);

export { githubRoutes };
