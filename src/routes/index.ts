import {Router} from 'express';

import registerUserController from "../controllers/registerUserController.ts";
import GetUserAllController from "../controllers/getUserAllController.ts";
import GetUserByIdController from "../controllers/getUserByIdController.ts";
import UpdateUserController from "../controllers/updateUserController.ts";
import DeleteUserController from "../controllers/deleteUserController.ts";

const routes = Router();

routes.get("/users", GetUserAllController.handle);
routes.get("/users/:id", GetUserByIdController.handle);
routes.post("/users", registerUserController.handle);
routes.put("/users/:id", UpdateUserController.handle);
routes.delete("/users/:id", DeleteUserController.handle);

export {routes}