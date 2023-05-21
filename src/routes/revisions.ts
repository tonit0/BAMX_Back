import { Router } from "express"
import { RevisionsController } from "../controllers/revisions";

const route = Router()

route.get('/', RevisionsController.getAll);
route.get('/:id', RevisionsController.getRevisionById);
route.post('/', RevisionsController.insert);
route.put('/:id', RevisionsController.update)

export default route