import { Request, Response } from "express";
import { EmployeesService } from "../services/employees";

class EmployeesController {
    static getAll = async (_req:Request, res:Response) => { 
        try{      
            const response = await EmployeesService.getEmployees();
            res.json(response);
        }catch(e){
            res.json(e);
        }  
    }

    static getEmployeeById = async (req:Request, res:Response) => { 
        try{   
            const id_get = req.params.id;   
            const response = await EmployeesService.getEmployeeById(id_get);
            res.json(response);
        }catch(e){
            res.status(500).json(e);
        }  
    }

    static insert = async ({ body }:Request, res:Response) => {
        try{       
            const response = await EmployeesService.insertEmployee(body);
            res.status(201).json({message: "REGISTRADO CON ÉXITO"});
        }catch(e){
            res.status(500).json(e);
        }
    }

    static update = async (req:Request, res:Response) => {
        try{            
            const id = req.params.id;
            const data = req.body;

            await EmployeesService.updateEmployee(data, id);
            res.status(201).json({message: "ACTUALIZADO CON ÉXITO"});
        }catch(e){
            res.status(500).json(e);
        }
    }
    
}

export { EmployeesController };