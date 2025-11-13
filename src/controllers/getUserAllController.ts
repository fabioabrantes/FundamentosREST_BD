import type {Request,Response} from "express";
import GetUsersAllUseCase from "../domain/User/usecases/getUsersAll.ts"
class RegisterUserController {
  handle(request:Request, response:Response) {
    const result = GetUsersAllUseCase.execute();
    response.status(result.status).json(result.body);
  }
}

export default new RegisterUserController();