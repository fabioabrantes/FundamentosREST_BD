import UserRepositoryMemory from "../../../repositories/userRepositoryMemory.ts";

class GetUsersAllUseCase {
  execute() {
    let users = UserRepositoryMemory.findAll();
    return { status: 200, body: users };
  }
}

export default new GetUsersAllUseCase();
