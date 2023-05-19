import { Router } from "express"
import { ProvidersController } from "../controllers/providers";

const route = Router()

route.get('/', ProvidersController.getAll);


export default route