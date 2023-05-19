import { Router } from "express"
import { InputsOutputsController } from "../controllers/inputs_outputs";

const route = Router()

route.get('/', InputsOutputsController.getAll);


export default route