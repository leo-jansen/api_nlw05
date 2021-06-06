import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities/User";

@EntityRepository(User)
class UsersRespository extends Repository<User> {}

export { UsersRespository };