import { getCustomRepository } from "typeorm";
import { UsersRespository } from "../repositories/UsersRepository";

class UsersService {
  async create(email: string) {
    const usersRespository = getCustomRepository(UsersRespository);
    const isExists = await usersRespository.findOne({ email });

    if(isExists) {
      return isExists;
    }

    const user = usersRespository.create({email});
    await usersRespository.save(user);
    return user;
  }  
}