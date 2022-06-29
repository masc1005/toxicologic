import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import prisma from "../database/config";

class User {
  async create(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;

      const userExists = await prisma.user.findFirst({ where: { email } });

      if (userExists) {
        return res.send({ msg: "user already exits!" }).status(409).end();
      }

      const pwd = await bcrypt.hash(password, 10);

      const save = await prisma.user.create({
        data: {
          name,
          email,
          password: pwd,
        },
      });

      return res.send({ save }).status(201).end();
    } catch (error) {
      return res.send({ msg: "Houve algum erro, tente novamente" });
    }
  }

  async createPatient(req: Request, res: Response) {
    try {
      const { name, email } = req.body;

      const userExists = await prisma.patient.findFirst({ where: { email } });

      if (userExists) {
        return res.send({ msg: "patient already exits!" }).status(409).end();
      }

      const save = await prisma.patient.create({
        data: { email, name },
      });

      delete save.id;

      return res.send({ save }).status(201).end();
    } catch (error) {
      return res.send({ msg: "Houve algum erro, tente novamente" });
    }
  }
}

export default new User();
