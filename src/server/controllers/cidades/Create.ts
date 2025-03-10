import { Request, RequestHandler, Response } from "express";
import {validation} from '../../shared/middlewares/validation';

import * as yup from 'yup';

interface ICidade {
  nome: string;
  estado: string;

}
const bodyValidation: yup.ObjectSchema<ICidade> = yup.object().shape({
  nome: yup.string().required().min(3),
  estado: yup.string().required().min(3)
}); 


//Criando o middleware

export const createValidation=validation('body',bodyValidation);


export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
  console.log(req.body);
  return res.send('create');
};

