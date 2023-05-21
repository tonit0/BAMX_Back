import { connection } from "../database";
import { Employee } from "../interfaces/employee";

class EmployeesService {
    static getEmployees = async () => {     
        let [rows] = await connection.execute('SELECT * FROM empleados ORDER BY id_empleado DESC');
        let employees: Employee[] = rows.map((r: any) => {
            return <Employee>r;
        })

        return employees;
    };

    static getEmployeeById = async (id: string) => {     
        let [rows] = await connection.execute('SELECT * FROM empleados WHERE id_empleado = ?', [id]);
        let employees: Employee[] = rows.map((r: any) => {
            return <Employee>r;
        })

        return employees;
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