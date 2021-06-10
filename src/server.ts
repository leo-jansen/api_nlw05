import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";

import "./database";
import { routes } from "./routes";

const app = express();
const http = createServer(app);
const io = new Server(http);


app.use(express.json());
app.use(routes);
app.listen(3000, () => console.log("Server rodando!!!"));