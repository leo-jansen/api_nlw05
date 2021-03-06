import { Request, Response } from "express";
import { MessagesService } from "../services/MessagesService";

class MessagesController {
  async create(req: Request,res: Response) {
    const { admin_id, user_id, text } = req.body;
    const messagesService = new MessagesService();
    const message = await messagesService.create({ admin_id, user_id, text });

    return res.json(message);
  }

  async showByUser(req: Request, res: Response) {
    const { id } = req.params;
    const messagesService = new MessagesService();
    const listMessage = await messagesService.listByUser(id);

    return res.json(listMessage);
  }
}

export { MessagesController };