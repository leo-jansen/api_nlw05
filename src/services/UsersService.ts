import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UsersRespository } from "../repositories/UsersRepository";

class UsersService {
  private usersRespository: Repository<User>;

  constructor() {
    this.usersRespository = getCustomRepository(UsersRespository);
  }

  async create(email: string) {
    const isExists = await this.usersRespository.findOne({ email });

    if(isExists) {
      return isExists;
    }

    const user = this.usersRespository.create({email});
    await this.usersRespository.save(user);
    return user;
  }  
}

export { UsersService };