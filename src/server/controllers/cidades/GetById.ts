import { Request, RequestHandler, Response } from "express";
import {validation} from '../../shared/middlewares/validation';
import { StatusCodes } from "http-status-codes";

import * as yup from 'yup';

interface IParamProps{
  id?:number;
}


//Criando o objecto para validar os dados de entrada e encaminhar ao middleware
export const getByIdValidation=validation({
  params:yup.object().shape({
    id: yup.number().integer().required().moreThan(0),
  })
});


export const getById = async (req: Request<IParamProps>, res: Response) => {
  console.log(req.params);
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado!');
};

