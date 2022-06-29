import { Request, Response } from "express";
import prisma from "../database/config";

class Base {
  async create(req: Request, res: Response) {
    try {
      const line = await prisma.base.count();

      console.log(line);

      if (line > 0) {
        await prisma.base.deleteMany({});
      }

      const save = await prisma.base.create({
        data: {
          cocain: 0.5,
          amphetamine: 0.2,
          methamphetamine: 0.2,
          MDA: 0.2,
          MDMA: 0.2,
          THC: 0.05,
          morphine: 0.2,
          codeine: 0.2,
          heroine: 0.2,
          benzoylecgonine: 0.05,
          cocaethylene: 0.05,
          norcocaine: 0.05,
          example_code: 1000,
        },
      });

      return res.send({ save }).status(201).end();
    } catch (error) {
      return res.send({ error });
    }
  }
}

export default new Base();
