import { Router } from "express"
import { BrandsController } from "../controllers/brands";

const route = Router()

route.get('/', BrandsController.getAll);
route.get('/:id', BrandsController.getBrandById);
route.post('/', BrandsController.insert);
route.put('/:id', BrandsController.update)

export default route