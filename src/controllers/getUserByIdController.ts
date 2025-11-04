import type { Request, Response } from "express";
import GetUserByIdUseCase from "../domain/User/usecases/getUserById.ts";
import type { UserEntity } from "../domain/User/entity/User.ts";
type ParamsType = {
  id: string;
};
class GetUserByIdController {
  handle(request: Request, response: Response) {
    const { id } = request.params as ParamsType;
    const result = GetUserByIdUseCase.execute(id);
    if (result.status === 400) {
      response.status(result.status).json(result.message);
      return;
    }
    response.status(result.status).json(result.user);
    return;
  }
}
export default new GetUserByIdController();
