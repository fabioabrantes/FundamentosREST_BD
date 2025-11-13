import { AppErrosCustom } from "../../../errors/errorsAplications.ts";
import UserRepositoryMemory from "../../../repositories/userRepositoryMemory.ts";

class GetUserByIdUseCase {
  execute(id: string) {
    let userExist = UserRepositoryMemory.findById(id);
    if (!userExist) {
      throw new AppErrosCustom("cliente não existe no banco",400);
    }
    return { status: 200, body: userExist };
  }
}

export default new GetUserByIdUseCase();
