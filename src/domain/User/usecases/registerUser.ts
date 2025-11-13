import { AppErrosCustom } from "../../../errors/errorsAplications.ts";
import UserRepositoryMemory from "../../../repositories/userRepositoryMemory.ts";
import type { UserEntity } from "../entity/User.ts";

class RegisterUserUseCase {
  execute(user: UserEntity) {
    let userExist = UserRepositoryMemory.findByCpf(user.cpf);
    if (userExist) {
      throw new AppErrosCustom("cliente ja existe no banco", 400);
    }
    UserRepositoryMemory.create(user);
    return { status: 201, body: user };
  }
}

export default new RegisterUserUseCase();
