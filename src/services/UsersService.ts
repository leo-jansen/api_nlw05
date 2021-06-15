import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UsersRespository } from "../repositories/UsersRepository";

class UsersService {
  private usersRepository: Repository<User>;

  constructor() {
    this.usersRepository = getCustomRepository(UsersRespository);
  }

  async create(email: string) {
    const isExists = await this.usersRepository.findOne({ email });

    if (isExists) {
      return isExists;
    }

    const user = this.usersRepository.create({ email });
    await this.usersRepository.save(user);
    return user;
  }

  async findByEmail(email: string) {
    const userEmail = this.usersRepository.findOne({ email });
    return userEmail;
  }

}

export { UsersService };