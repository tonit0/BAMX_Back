import { Router } from "express"
import { InputsOutputsController } from "../controllers/inputs_outputs";

const route = Router()

route.get('/', InputsOutputsController.getAll);
route.get('/:id', InputsOutputsController.getInputOutputById);
route.post('/', InputsOutputsController.insert);
route.put('/:id', InputsOutputsController.update)


export default route