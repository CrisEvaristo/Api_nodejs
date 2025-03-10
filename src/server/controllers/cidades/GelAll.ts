import { Request, RequestHandler, Response } from "express";
import {validation} from '../../shared/middlewares/validation';
import { StatusCodes } from "http-status-codes";

import * as yup from 'yup';

interface IQueryProps{
  page?:number;
  limit?:number;
  filter?:string;
}


//Criando o objecto para validar os dados de entrada e encaminhar ao middleware
export const getAllValidation=validation({
  query:yup.object().shape({
    page: yup.number().notRequired().moreThan(0),
    limit: yup.number().notRequired().moreThan(0),
    filter: yup.string().notRequired()
  })
});


export const getAll = async (req: Request<{}, {},{}, IQueryProps>, res: Response) => {
  console.log(req.query);
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado!');
};

