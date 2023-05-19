import { Router } from "express"
import { ProductsServicesController } from "../controllers/products_services";

const route = Router()

route.get('/', ProductsServicesController.getAll);


export default route