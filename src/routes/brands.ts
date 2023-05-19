import { Router } from "express"
import { BrandsController } from "../controllers/brands";

const route = Router()

route.get('/', BrandsController.getAll);


export default route