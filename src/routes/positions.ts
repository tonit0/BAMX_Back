import { Router } from "express"
import { PositionsController } from "../controllers/positions";

const route = Router()

route.get('/', PositionsController.getAll);


export default route