import UserRepositoryMemory from "../../../repositories/userRepositoryMemory.ts";

class GetUserByIdUseCase {
  execute(id: string) {
    let userExist = UserRepositoryMemory.findById(id);
    if (!userExist) {
      return { status: 400, message: "cliente não existe no banco" };
    }

    return { status: 200, user:userExist };
  }
}

export default new GetUserByIdUseCase();
