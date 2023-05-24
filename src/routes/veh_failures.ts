import { Router } from "express"
import { VehFailuresController } from "../controllers/veh_failures";

const route = Router()

route.get('/', VehFailuresController.getAll);
route.get('/:id', VehFailuresController.getVehFailureById);
route.post('/', VehFailuresController.insert);
route.put('/:id', VehFailuresController.update)


export default route