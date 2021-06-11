import { Request, Response } from "express";
import { SettingsService } from "../services/SettingsService";

class SettigsController {
  async create(req: Request, res: Response) {
    const { chat, username} = req.body;
    const settingsService = new SettingsService();
    try {
      const settings = await settingsService.create({chat, username});
      return res.status(201).json(settings);
    } catch (error) {
      return res.status(400).json({ message: error.message});
    }
  }

  async findByUsername(req: Request, res: Response) {
    const { username } = req.params;
    const settingsService = new SettingsService();
    const settings = await settingsService.findByUsername(username);
    return res.json(settings);
  }

  async update(req: Request, res: Response) {
    const { username } = req.params;
    const { chat } = req.body;
    const settingsService = new SettingsService();
    await settingsService.update(username, chat);

  }
}

export { SettigsController };