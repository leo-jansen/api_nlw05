import { Router } from "express";
import { SettigsController } from "../controller/SettingsController";

const routes = Router();
const settigsController = new SettigsController();

routes.post("/settings", settigsController.create);

export { routes };