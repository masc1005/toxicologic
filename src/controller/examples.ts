import prisma from "../database/config";
import { Request, Response } from "express";

import CompareExample from "../service/compare";

class Examples {
  async create(req: Request, res: Response) {
    try {
      const {
        amphetamine,
        benzoylecgonine,
        cocaethylene,
        cocain,
        codeine,
        heroine,
        MDA,
        MDMA,
        methamphetamine,
        morphine,
        norcocaine,
        THC,
        patient,
      } = req.body;

      const example_code = Math.floor(Math.random() * 99999999);

      const exampleCreate = await prisma.examples.create({
        data: {
          example_code,
          amphetamine,
          benzoylecgonine,
          cocaethylene,
          cocain,
          codeine,
          heroine,
          MDA,
          MDMA,
          methamphetamine,
          morphine,
          norcocaine,
          THC,
          patient,
        },
      });

      const base = await prisma.base.findMany();

      const example = exampleCreate.example_code;

      delete base[0].id;
      delete base[0].example_code;
      delete exampleCreate.id;
      delete exampleCreate.patient;
      delete exampleCreate.example_code;

      const restultado = CompareExample.compare(base[0], exampleCreate);

      const positive = restultado.find((param) => param === true);

      if (!positive) {
        await prisma.examples.update({
          data: { result: false },
          where: { example_code: example },
        });
        return res.send({
          resultado: "Negativo",
          "código da amostra": example,
        });
      }

      return res.send({ resultado: "Positvo", "código da amostra": example });
    } catch (error) {
      return res.send({ msg: "envie todos os dados necessários" });
    }
  }

  async listAll(req: Request, res: Response) {
    const data = await prisma.examples.findMany({ include: { Patient: true } });

    data.map((response) => {
      delete response.Patient.id;
      delete response.patient;
      delete response.id;
    });

    return res.send({ data }).status(200).end();
  }
}

export default new Examples();
