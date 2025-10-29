import { Router } from "express";
import { usersRoutes } from "./users.routes.ts";

const routes = Router();

routes.use(usersRoutes);

export { routes };
