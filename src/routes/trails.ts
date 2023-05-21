import { Router } from "express"
import { TrailsController } from "../controllers/trails";

const route = Router()

route.get('/', TrailsController.getAll);
route.get('/:id', TrailsController.getTrailById);
route.post('/', TrailsController.insert);
route.put('/:id', TrailsController.update)

export default route