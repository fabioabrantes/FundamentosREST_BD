import type { Request, Response } from "express";
import DeleteUserUseCase from "../domain/User/usecases/deleteUser.ts";

type ParamsType = {
  id: string;
};

class DeleteUserController {
  handle(request: Request, response: Response) {
    const { id } = request.params as ParamsType;

    const result = DeleteUserUseCase.execute(id);
    if (result.status === 400) {
      response.status(result.status).json(result.message);
      return;
    }
    response.status(result.status).json(result.userDeleted);
    return;
  }
}

export default new DeleteUserController();
