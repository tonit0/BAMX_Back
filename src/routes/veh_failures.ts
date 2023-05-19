import { Router } from "express"
import { VehFailuresController } from "../controllers/veh_failures";

const route = Router()

route.get('/', VehFailuresController.getAll);


export default route