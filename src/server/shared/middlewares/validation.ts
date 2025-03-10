import { RequestHandler } from "express";
import * as yup from 'yup';
import { StatusCodes } from "http-status-codes";

type TProperty='body'|'header'|'params'|'query';

type TAllSchemas=Record<TProperty,yup.ObjectSchema<any>>;

type TValidation=(schemas: Partial<TAllSchemas>)=>RequestHandler;



export const validation:TValidation =(schemas)=> async (req, res, next)=>{
     
  console.log(schemas);
  const errorResult:Record<string,Record<string,string>>={};

  Object.entries(schemas).forEach(([key,schema])=>{
    try {
       schema.validateSync(req[key as TProperty], { abortEarly: false });

    } catch (error) {
      const yupError = error as yup.ValidationError;
  
      const validateErrors: Record<string, string> = {};
      yupError.inner.forEach(error => {
        if (!error.path) return;
        validateErrors[error.path] = error.message;
      });
      
      errorResult[key]=validateErrors;

    }
  });

  if(Object.entries(errorResult).length===0){
    return next();
  }
  else{
    return res.status(StatusCodes.BAD_REQUEST).json({validateErrors:errorResult});
  }
 

  };
