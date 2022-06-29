import { Router } from "express";
import auth from "./controller/auth";
import base from "./controller/base";
import user from "./controller/user";
import authMiddleware from "./middleware/auth";
import examples from "./controller/examples";

const routes = Router();

routes.get("/", (req, res) => {
  res.send({ msg: "Olá" }).status(200).end();
});

routes.post("/user", user.create);
routes.post("/user", base.create);

routes.post("/login", auth.Authenticate);

routes.use(authMiddleware);
routes.post("/patient", user.createPatient);
routes.post("/examples", examples.create);
routes.get("/examples", examples.listAll);

export default routes;
