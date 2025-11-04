import type {Request,Response} from "express";
import RegisterUserUseCase from "../domain/User/usecases/registerUser.ts"
import type {UserEntity} from '../domain/User/entity/User.ts';
class RegisterUserController {
  handle(request:Request, response:Response) {
    const { cpf, name } = request.body as UserEntity;
    const result = RegisterUserUseCase.execute({name,cpf});
    response.status(result.status).json(result.message);
  }
}

export default new RegisterUserController();