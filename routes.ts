import { Router } from "express";
import { AuthenticateUserController } from "./src/controllers/AuthenticateUserController";
import { CreateMessageController } from "./src/controllers/CreateMessageController";
import { ensureAuthenticated } from "./src/middleware/ensureAuthenticated";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);

router.post("/message", ensureAuthenticated,new CreateMessageController().handle);
export {router};