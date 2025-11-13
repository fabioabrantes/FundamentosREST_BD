import { AppErrosCustom } from "../../../errors/errorsAplications.ts";
import UserRepositoryMemory from "../../../repositories/userRepositoryMemory.ts";
import type { UserEntity } from "../entity/User.ts";

class UpdateUserUseCase {
  execute(id: string, user: UserEntity) {
    let userExist = UserRepositoryMemory.findById(id);
    if (!userExist) {
      throw new AppErrosCustom("cliente não existe no banco",400);
    }
    userExist.name = user.name;
    userExist.cpf = user.cpf;
    return { status: 200, userUpdated: userExist };
  }
}

export default new UpdateUserUseCase();
