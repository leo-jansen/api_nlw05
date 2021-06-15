import { http } from "./customServer";
import "./websocket/client";
import "./websocket/admin";

http.listen(3000, () => console.log("Server rodando!!!"));