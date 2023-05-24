import { Router } from "express"
import { ProductsServicesController } from "../controllers/products_services";

const route = Router()

route.get('/', ProductsServicesController.getAll);
route.get('/:id', ProductsServicesController.getProductServiceById);
route.post('/', ProductsServicesController.insert);
route.put('/:id', ProductsServicesController.update)


export default route