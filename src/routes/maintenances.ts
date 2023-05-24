import { Router } from "express"
import { MaintenancesController } from "../controllers/maintenances";

const route = Router()

route.get('/', MaintenancesController.getAll);
route.get('/:id', MaintenancesController.getMaintenanceById);
route.post('/', MaintenancesController.insert);
route.put('/:id', MaintenancesController.update)

export default route