import { Router } from "express";
import { SettigsController } from "../controller/SettingsController";
import { UsersController } from "../controller/UsersCrontroller";

const routes = Router();
const settigsController = new SettigsController();
const usersController = new UsersController();

routes.post("/settings", settigsController.create);
routes.post("/users", usersController.create)

export { routes };