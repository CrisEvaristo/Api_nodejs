import { Router, Request, Response } from "express";

const router=Router();

router.get('/teste', (req: Request, res: Response) => {
  return res.send('ola dev');
});

router.get('/', (req: Request, res: Response) => {
  return res.send('ola principal');
});


router.post('/teste',(req:Request,res:Response)=>{
  console.log(req.body);
  return res.send('testando psot');
});
export default router;