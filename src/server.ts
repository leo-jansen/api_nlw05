import { http } from "./customServer";
import "./websocket/client";

http.listen(3000, () => console.log("Server rodando!!!"));