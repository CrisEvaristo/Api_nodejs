import { Router, Request, Response } from "express";

import {CidadeController} from './../controllers';


const router=Router();


router.get('/', (req: Request, res: Response) => {
  return res.send('Bem-vindo');
});


router.get('/cidades',CidadeController.getAllValidation,CidadeController.getAll);

router.get('/cidades/:id',CidadeController.getByIdValidation,CidadeController.getById);

router.post('/cidades',CidadeController.createValidation,CidadeController.create);

router.put('/cidades/:id',CidadeController.updateByIdValidation,CidadeController.updateById);

router.get('/cidades/:id',CidadeController.deleteByIdValidation,CidadeController.deleteById);

export default router;
