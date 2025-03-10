import { Router, Request, Response } from "express";

import {CidadeController} from './../controllers';


const router=Router();


router.get('/', (req: Request, res: Response) => {
  return res.send('Bem-vindo');
});


router.get('/cidades',CidadeController.getAllValidation,CidadeController.getAll);
router.post('/cidades',CidadeController.createValidation,CidadeController.create);


export default router;