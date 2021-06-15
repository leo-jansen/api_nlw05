import { io } from "../customServer";
import { ConnectionsService } from "../services/ConnectionsService";
import { MessagesService } from "../services/MessagesService";
import { v4 as uuid } from "uuid";

io.on("connect", async (socket) => {
  const admin_id = uuid();
  const connectionsService = new ConnectionsService();
  const messagesService = new MessagesService();
  const allConnectionsWithoutAdmin = await connectionsService.allConnectionsWithoutAdmin();

  io.emit("admin_list_all_users", allConnectionsWithoutAdmin);
  
  socket.on("admin_list_messages_by_user", async (params, callback) => {
    const { user_id } = params;
    const allMessages = await messagesService.listByUser(user_id);
    callback(allMessages);
  })

  socket.on("admin_send_message", async params => {
    const { user_id, text} = params;
    await messagesService.create({ text, user_id, admin_id });
    const { socket_id } = await connectionsService.findByUserId(user_id);
    io.to(socket_id).emit("admin_send_to_client", {
      text,
      socket_id: socket.id
    })
    
  })
})