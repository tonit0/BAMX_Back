import { connection } from "../database";
import { Employee } from "../interfaces/employee";
import { PositionsService } from "./positions";

class EmployeesService {
    static getEmployees = async () => {     
        const response: any = [];     

        let [rows] = await connection.execute('SELECT * FROM empleados ORDER BY id_empleado DESC');
        let employees: Employee[] = rows.map((r: any) => {
            return <Employee>r;
        })

        for(let i = 0; i < employees.length; i++) {
            const position = await PositionsService.getPositionById(
                employees[i].id_puesto!.toString()
            );
            delete employees[i].id_puesto;
            employees[i].puesto = position[0];
            response.push(employees[i]);
        }

        return response;
    };

    static getEmployeeById = async (id: string) => {     
        const response: any = [];     

        let [rows] = await connection.execute('SELECT * FROM empleados WHERE id_empleado = ?', [id]);
        let employees: Employee[] = rows.map((r: any) => {
            return <Employee>r;
        })

        for(let i = 0; i < employees.length; i++) {
            const position = await PositionsService.getPositionById(
                employees[i].id_puesto!.toString()
            );
            delete employees[i].id_puesto;
            employees[i].puesto = position[0];
            response.push(employees[i]);
        }

        return response;
    };

    static insertEmployee = async (item: Employee) => {                
        await connection.query('INSERT INTO empleados SET ?', [item]);
        return item;  
    };

    static updateEmployee = async (item: Employee, id: string) => {         
        await connection.query('UPDATE empleados SET ? WHERE id_empleado = ?', [item, id]);
        return item;
    };
}

export { EmployeesService };