import { Router } from "express"
import { ProvidersController } from "../controllers/providers";

const route = Router()

route.get('/', ProvidersController.getAll);
route.get('/:id', ProvidersController.getProviderById);
route.post('/', ProvidersController.insert);
route.put('/:id', ProvidersController.update)

export default route