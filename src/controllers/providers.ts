import { Request, Response } from "express";
import { ProvidersService } from "../services/providers";

class ProvidersController {
    static getAll = async (_req:Request, res:Response) => { 
        try{      
            const response = await ProvidersService.getProviders();
            res.json(response);
        }catch(e){
            res.json(e);
        }  
    }

    static getProviderById = async (req:Request, res:Response) => { 
        try{   
            const id_get = req.params.id;   
            const response = await ProvidersService.getProviderById(id_get);
            res.json(response);
        }catch(e){
            res.status(500).json(e);
        }  
    }

    static insert = async ({ body }:Request, res:Response) => {
        try{       
            const response = await ProvidersService.insertProvider(body);
            res.status(201).json({message: "REGISTRADO CON ÉXITO"});
        }catch(e){
            res.status(500).json(e);
        }
    }

    static update = async (req:Request, res:Response) => {
        try{            
            const id = req.params.id;
            const data = req.body;

            await ProvidersService.updateProvider(data, id);
            res.status(201).json({message: "ACTUALIZADO CON ÉXITO"});
        }catch(e){
            res.status(500).json(e);
        }
    }
    
}

export { ProvidersController };