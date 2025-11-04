import UserRepositoryMemory from "../../../repositories/userRepositoryMemory.ts";

class DeleteUserUseCase {
  execute(id: string) {
    let userExist = UserRepositoryMemory.findById(id);
    if (!userExist) {
      return { status: 400, message: "cliente não existe no banco" };
    }
    UserRepositoryMemory.delete(id);
    return { status: 200, userDeleted:userExist };
  }
}

export default new DeleteUserUseCase();
