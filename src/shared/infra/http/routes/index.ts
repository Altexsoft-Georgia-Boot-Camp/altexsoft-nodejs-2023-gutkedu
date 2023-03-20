import { Request, Response, Router } from "express";
import { githubRoutes } from "./github.routes";

export const router = Router();

router.use("/github", githubRoutes);
