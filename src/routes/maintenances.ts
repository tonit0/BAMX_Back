import { Router } from "express"
import { MaintenancesController } from "../controllers/maintenances";

const route = Router()

route.get('/', MaintenancesController.getAll);


export default route