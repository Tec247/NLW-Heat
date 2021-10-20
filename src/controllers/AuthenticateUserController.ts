import{Request, Response} from "express";
import{ AuthenticateUserService } from "../services/AuthenticateUserService";

class AuthenticateUserController{
  async handle(req:any, res:any){
    const { code } = req.body;
    
    const service = new AuthenticateUserService();

    const result = await service.execute(code);

    return req.json(result);
  }
}
export {AuthenticateUserController}