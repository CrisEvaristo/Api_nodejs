import { Request, RequestHandler, Response } from "express";
import {validation} from '../../shared/middlewares/validation';

import * as yup from 'yup';
import { StatusCodes } from "http-status-codes";

interface IParamProps{
  id?:number;
}

interface IBodyProps{
  nome?: string;
  estado?: string;

}



//Criando o objecto para validar os dados de entrada e encaminhar ao middleware
export const updateByIdValidation=validation({
  body:yup.object().shape({
    nome: yup.string().required().min(3),
    estado: yup.string().required().min(3)
  }),
    params:yup.object().shape({
      id: yup.number().integer().required().moreThan(0),
    })
});


export const updateById = async (req: Request<IParamProps, {}, IBodyProps>, res: Response) => {
  console.log(req.body);
  console.log(req.params);
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado!');
};

