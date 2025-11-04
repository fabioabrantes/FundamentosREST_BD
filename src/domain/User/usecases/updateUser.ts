import UserRepositoryMemory from "../../../repositories/userRepositoryMemory.ts";
import { UserEntity } from "../entity/User.ts";

class UpdateUserUseCase {
  execute(id: string,user:UserEntity) {
    let userExist = UserRepositoryMemory.findById(id);
    if (!userExist) {
      return { status: 400, message: "cliente não existe no banco" };
    }
    userExist.name = user.name;
    userExist.cpf = user.cpf;
    return { status: 200, userUpdated:userExist };
  }
}

export default new UpdateUserUseCase();
