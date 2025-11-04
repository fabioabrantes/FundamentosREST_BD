import express from "express";
import { routes } from "./routes/index.ts";

import registerUserController from "./controllers/registerUserController.ts";
import GetUserAllController from "./controllers/getUserAllController.ts";
import GetUserByIdController from "./controllers/getUserByIdController.ts";
import UpdateUserController from "./controllers/updateUserController.ts";
import DeleteUserController from "./controllers/deleteUserController.ts";



const server = express();
server.use(express.json());

server.use(routes);

/// rotas de usuário
server.get("/users", GetUserAllController.handle);
server.get("/users/:id",GetUserByIdController.handle);
server.post("/users", registerUserController.handle);
server.put("/users/:id",UpdateUserController.handle );
server.delete("/users/:id", DeleteUserController.handle);

// deixo o server online no ip:localhost e porta:3333
server.listen(3333, () => {
  console.log("o server esta online na porta 3333");
});
