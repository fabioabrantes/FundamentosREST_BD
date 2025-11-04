import UserRepositoryMemory from "../../../repositories/userRepositoryMemory.ts"

import type {UserEntity} from "../entity/User.ts";
class RegisterUserUseCase{
  execute(user:UserEntity) {
   let userExist = UserRepositoryMemory.findByCpf(user.cpf);
   if(userExist){
    return {status:400,message:"cliente ja existe no banco"}
   }
   const userCreated = UserRepositoryMemory.create(user);
   return {status:201,message:"cliente criado com sucesso"}
  
  }

}

export default new RegisterUserUseCase();