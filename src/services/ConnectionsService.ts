import { getCustomRepository, Repository } from "typeorm";
import { Connection } from "../entities/Connection";
import { ConnectionsRepository } from "../repositories/ConnectionsRepository";

interface IConnectionCreate {
  id?: string;
  admin_id?: string;
  user_id: string;
  socket_id: string;
}

class ConnectionsService {
  private connectionsRepository: Repository<Connection>;

  constructor() {
    this.connectionsRepository = getCustomRepository(ConnectionsRepository);
  }

  async create({ socket_id, user_id, admin_id, id }: IConnectionCreate) {
    const connection = this.connectionsRepository.create({ socket_id, user_id, admin_id, id });
    await this.connectionsRepository.save(connection);

    return connection;
  }

  async findByUserId(user_id: string) {
    const connection = await this.connectionsRepository.findOne({ user_id });
    return connection;
  }

  async allConnectionsWithoutAdmin() {
    const list = await this.connectionsRepository.find({ where: { admin_id: null }, relations: ["user"] });
    return list;
  }

  async findBySocketID(socket_id: string) {
    const connection = await this.connectionsRepository.findOne({ socket_id });
    return connection;
  }

  async updateAdminID(user_id: String, admin_id: string) {
    await this.connectionsRepository.createQueryBuilder()
      .update(Connection)
      .set({ admin_id })
      .where("user_id :user_is", { user_id })
      .execute();
  }
}

export { ConnectionsService };