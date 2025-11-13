import type { Request, Response } from "express";
import UpdateUserUseCase from "../domain/User/usecases/updateUser.ts";

type ParamsType = {
  id: string;
};
type BodyType = {
  name: string;
  cpf: string;
};
class UpdateUserController {
  handle(request: Request, response: Response) {
    const { cpf, name } = request.body as BodyType;
    const { id } = request.params as ParamsType;

    const result = UpdateUserUseCase.execute(id, { name, cpf });
       response.status(result.status).json(result.userUpdated);
    return;
  }
}

export default new UpdateUserController();
