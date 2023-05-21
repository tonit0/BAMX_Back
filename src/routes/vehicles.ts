import { Router } from "express"
import { VehiclesController } from "../controllers/vehicles";

const route = Router()

route.get('/', VehiclesController.getAll);
route.get('/:id', VehiclesController.getVehicleById);
route.post('/', VehiclesController.insert);
route.put('/:id', VehiclesController.update);

export default route