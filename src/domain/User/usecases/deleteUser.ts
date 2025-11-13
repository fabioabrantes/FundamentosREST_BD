import { AppErrosCustom } from "../../../errors/errorsAplications.ts";
import UserRepositoryMemory from "../../../repositories/userRepositoryMemory.ts";

class DeleteUserUseCase {
  execute(id: string) {
    let userExist = UserRepositoryMemory.findById(id);
    if (!userExist) {
      throw new AppErrosCustom("cliente não existe no banco", 400);
    }
    UserRepositoryMemory.delete(id);
    return { status: 200, userDeleted: userExist };
  }
}

export default new DeleteUserUseCase();
