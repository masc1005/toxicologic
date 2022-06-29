import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import prisma from "../database/config";

class AuthController {
  async Authenticate(req: Request, res: Response) {
    try {
      const { email, pwd } = req.body;

      const userAuth = await prisma.user.findFirst({ where: { email } });

      if (!userAuth) {
        return res.send({ msg: "User not found!" }).status(404).end();
      }

      const isValid = await bcrypt.compare(pwd, userAuth.password);

      if (!isValid) {
        res.send({ msg: "Invalid Password" }).status(401).end();
      }

      const token = jwt.sign(
        { id: userAuth.id, name: userAuth.name },
        process.env.AUTH_SECRET,
        {
          expiresIn: "1d",
        }
      );

      delete userAuth.password;
      delete userAuth.id;

      return res.json({
        userAuth,
        token,
      });
    } catch (error) {
      return res.send({ msg: "Houve um erro, tente novamente" });
    }
  }
}

export default new AuthController();
