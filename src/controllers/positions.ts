import { Request, Response } from "express";
import { PositionsService } from "../services/positions";

class PositionsController {
    static getAll = async (_req:Request, res:Response) => { 
        try{      
            const response = await PositionsService.getPositions();
            res.json(response);
        }catch(e){
            res.json(e);
        }  
    }

    static getPositionById = async (req:Request, res:Response) => { 
        try{   
            const id_get = req.params.id;   
            const response = await PositionsService.getPositionById(id_get);
            res.json(response);
        }catch(e){
            res.status(500).json(e);
        }  
    }

    static insert = async ({ body }:Request, res:Response) => {
        try{       
            const response = await PositionsService.insertPosition(body);
            res.status(201).json({message: "REGISTRADO CON ÉXITO"});
        }catch(e){
            res.status(500).json(e);
        }
    }

    static update = async (req:Request, res:Response) => {
        try{            
            const id = req.params.id;
            const data = req.body;

            await PositionsService.updatePosition(data, id);
            res.status(201).json({message: "ACTUALIZADO CON ÉXITO"});
        }catch(e){
            res.status(500).json(e);
        }
    }
    
}

export { PositionsController };