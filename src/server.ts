import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import routes from "./routes";

const server = express();

dotenv.config();

server.use(express.json());
server.use(cors());
server.use(routes);

server.listen(process.env.SERVER_PORT, () => {
  console.log("server up");
});
