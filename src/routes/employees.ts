import { Router } from "express"
import { EmployeesController } from "../controllers/employees";

const route = Router()

route.get('/', EmployeesController.getAll);


export default route