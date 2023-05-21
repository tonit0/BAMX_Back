import { Request, Response } from "express";
import { VehiclesService } from "../services/vehicles";

class VehiclesController {
    static getAll = async (_req:Request, res:Response) => { 
        try{      
            const response = await VehiclesService.getVehicles();
            res.json(response);
        }catch(e){
            res.json(e);
        }  
    }

    static getVehicleById = async (req:Request, res:Response) => { 
        try{   
            const id_get = req.params.id;   
            const response = await VehiclesService.getVehicleById(id_get);
            res.json(response);
        }catch(e){
            res.status(500).json(e);
        }  
    }

    static insert = async ({ body }:Request, res:Response) => {
        try{       
            const response = await VehiclesService.insertVehicle(body);
            res.status(201).json({message: "REGISTRADO CON ÉXITO"});
        }catch(e){
            res.status(500).json(e);
        }
    }

    static update = async (req:Request, res:Response) => {
        try{            
            const id = req.params.id;
            const data = req.body;

            await VehiclesService.updateVehicle(data, id);
            res.status(201).json({message: "ACTUALIZADO CON ÉXITO"});
        }catch(e){
            res.status(500).json(e);
        }
    }
}

export { VehiclesController };