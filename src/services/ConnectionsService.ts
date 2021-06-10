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
  private connectionsService: Repository<Connection>;

  constructor() {
    this.connectionsService = getCustomRepository(ConnectionsRepository);
  }
  
  async create({ socket_id, user_id, admin_id, id }: IConnectionCreate) {
    const connection = this.connectionsService.create({ socket_id, user_id, admin_id, id });
    await this.connectionsService.save(connection);

    return connection;
  }

  async findByUserId(user_id: string) {
    const connection = await this.connectionsService.findOne({ user_id });
    return connection;
  }
}

export { ConnectionsService };