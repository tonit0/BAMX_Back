import { Router } from "express"
import { RevisionsController } from "../controllers/revisions";

const route = Router()

route.get('/', RevisionsController.getAll);


export default route