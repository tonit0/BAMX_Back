import { Router } from "express"
import { EmployeesController } from "../controllers/employees";

const route = Router()

route.get('/', EmployeesController.getAll);
route.get('/:id', EmployeesController.getEmployeeById);
route.post('/', EmployeesController.insert);
route.put('/:id', EmployeesController.update)

export default route