import { RequestHandler } from "express";
import * as yup from 'yup';
import { StatusCodes } from "http-status-codes";

type TValidation=(field:'body'|'header'|'params'|'query',schema: yup.ObjectSchema<any>)=>RequestHandler;


export const validation:TValidation =(field,schema: yup.ObjectSchema<any>)=> async (req, res, next)=>{
     
  try {
        await schema.validate(req[field], { abortEarly: false });
        return next();
      } catch (error) {
        const yupError = error as yup.ValidationError;
    
        const validateErrors: Record<string, string> = {};
        yupError.inner.forEach(error => {
          if (!error.path) return;
          validateErrors[error.path] = error.message;
        });
    
        return res.status(StatusCodes.BAD_REQUEST).json({
          validateErrors,
        });
      }
  };
