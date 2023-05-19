import { Router } from "express"
import { TrailsController } from "../controllers/trails";

const route = Router()

route.get('/', TrailsController.getAll);


export default route