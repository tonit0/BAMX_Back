import { Request, Response } from "express";
import { TrailsService } from "../services/trails";

class TrailsController {
    static getAll = async (_req:Request, res:Response) => { 
        try{      
            const response = await TrailsService.getTrails();
            res.json(response);
        }catch(e){
            res.json(e);
        }  
    }

    static getTrailById = async (req:Request, res:Response) => { 
        try{   
            const id_get = req.params.id;   
            const response = await TrailsService.getTrailById(id_get);
            res.json(response);
        }catch(e){
            res.status(500).json(e);
        }  
    }

    static insert = async ({ body }:Request, res:Response) => {
        try{       
            const response = await TrailsService.insertTrail(body);
            res.status(201).json({message: "REGISTRADO CON ÉXITO"});
        }catch(e){
            res.status(500).json(e);
        }
    }

    static update = async (req:Request, res:Response) => {
        try{            
            const id = req.params.id;
            const data = req.body;

            await TrailsService.updateTrail(data, id);
            res.status(201).json({message: "ACTUALIZADO CON ÉXITO"});
        }catch(e){
            res.status(500).json(e);
        }
    }
    
}

export { TrailsController };