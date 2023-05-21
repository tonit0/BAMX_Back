import { Router } from "express"
import { PositionsController } from "../controllers/positions";

const route = Router()

route.get('/', PositionsController.getAll);
route.get('/:id', PositionsController.getPositionById);
route.post('/', PositionsController.insert);
route.put('/:id', PositionsController.update)

export default route