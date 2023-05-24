import { Request, Response } from "express";
import { VehFailuresService } from "../services/veh_failures";

class VehFailuresController {
    static getAll = async (_req:Request, res:Response) => { 
        try{      
            const response = await VehFailuresService.getVehFailures();
            res.json(response);
        }catch(e){
            res.json(e);
        }  
    }

    static getVehFailureById = async (req:Request, res:Response) => { 
        try{   
            const id_get = req.params.id;   
            const response = await VehFailuresService.getVehFailureById(id_get);
            res.json(response);
        }catch(e){
            res.status(500).json(e);
        }  
    }

    static insert = async ({ body }:Request, res:Response) => {
        try{       
            const response = await VehFailuresService.insertVehFailure(body);
            res.status(201).json({message: "REGISTRADO CON ÉXITO"});
        }catch(e){
            res.status(500).json(e);
        }
    }

    static update = async (req:Request, res:Response) => {
        try{            
            const id = req.params.id;
            const data = req.body;

            await VehFailuresService.updateVehFailure(data, id);
            res.status(201).json({message: "ACTUALIZADO CON ÉXITO"});
        }catch(e){
            res.status(500).json(e);
        }
    }
    
    
}

export { VehFailuresController };