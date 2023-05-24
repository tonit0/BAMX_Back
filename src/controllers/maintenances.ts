import { Request, Response } from "express";
import { MaintenancesService } from "../services/maintenances";

class MaintenancesController {
    static getAll = async (_req:Request, res:Response) => { 
        try{      
            const response = await MaintenancesService.getMaintenances();
            res.json(response);
        }catch(e){
            res.json(e);
        }  
    }

    static getMaintenanceById = async (req:Request, res:Response) => { 
        try{   
            const id_get = req.params.id;   
            const response = await MaintenancesService.getMaintenanceById(id_get);
            res.json(response);
        }catch(e){
            res.status(500).json(e);
        }  
    }

    static insert = async ({ body }:Request, res:Response) => {
        try{       
            const response = await MaintenancesService.insertMaintenance(body);
            res.status(201).json({message: "REGISTRADO CON ÉXITO"});
        }catch(e){
            res.status(500).json(e);
        }
    }

    static update = async (req:Request, res:Response) => {
        try{            
            const id = req.params.id;
            const data = req.body;

            await MaintenancesService.updateMaintenance(data, id);
            res.status(201).json({message: "ACTUALIZADO CON ÉXITO"});
        }catch(e){
            res.status(500).json(e);
        }
    }
    
}

export { MaintenancesController };