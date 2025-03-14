import { Request, RequestHandler, Response } from "express";
import {validation} from '../../shared/middlewares/validation';

import * as yup from 'yup';
import { StatusCodes } from "http-status-codes";

interface ICidade {
  nome: string;
  estado: string;

}


//Criando o objecto para validar os dados de entrada e encaminhar ao middleware
export const createValidation=validation({
  body:yup.object().shape({
    nome: yup.string().required().min(3),
    estado: yup.string().required().min(3)
  })
});


export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
  console.log(req.body);
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado!');
};

