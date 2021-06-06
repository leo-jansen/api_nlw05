import { getCustomRepository } from "typeorm"
import { SettingsRepository } from "../repositories/SettingsRepository";

interface ISettingsCreate {
  chat: boolean;
  username: string;
}
class SettingsService {
  async create({ chat, username }: ISettingsCreate) {
    const settingsRepository = getCustomRepository(SettingsRepository);
    const isExists = await settingsRepository.findOne({username});

    if(isExists) { throw new Error("Usuario já existe"); }

    const settings = settingsRepository.create({ chat, username });
    await settingsRepository.save(settings);
    
    return settings;
  }
}

export { SettingsService }