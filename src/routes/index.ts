import { Router } from "express";
import { MessagesController } from "../controller/MessagesController";
import { SettigsController } from "../controller/SettingsController";
import { UsersController } from "../controller/UsersCrontroller";

const routes = Router();
const settigsController = new SettigsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

routes.post("/settings", settigsController.create);
routes.get("/settings/:username", settigsController.findByUsername);
routes.put("/settings/:username", settigsController.update);

routes.post("/users", usersController.create);

routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser);

export { routes };