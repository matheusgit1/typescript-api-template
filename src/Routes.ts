import {Router, Request, Response} from 'express'

const router = Router()

router.get("/test", async (req: Request, res: Response) => {
  try{
    return res.send({"hello":"world"})
  }catch(error){
    return res.send({"hello":"error"})
  }
})

router.get("/test-2", async (req: Request, res: Response) => {
  try{
    return res.send({"hello":"world-2"})
  }catch(error){
    return res.send({"hello":"error-2"})
  }
})

export default router;