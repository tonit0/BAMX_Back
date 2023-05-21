import { Request, Response } from "express";
import { RevisionsService } from "../services/revisions";

class RevisionsController {
    static getAll = async (_req:Request, res:Response) => { 
        try{      
            const response = await RevisionsService.getRevisions();
            res.json(response);
        }catch(e){
            res.json(e);
        }  
    }

    static getRevisionById = async (req:Request, res:Response) => { 
        try{   
            const id_get = req.params.id;   
            const response = await RevisionsService.getRevisionById(id_get);
            res.json(response);
        }catch(e){
            res.status(500).json(e);
        }  
    }

    static insert = async ({ body }:Request, res:Response) => {
        try{       
            const response = await RevisionsService.insertRevision(body);
            res.status(201).json({message: "REGISTRADO CON ÉXITO"});
        }catch(e){
            res.status(500).json(e);
        }
    }

    static update = async (req:Request, res:Response) => {
        try{            
            const id = req.params.id;
            const data = req.body;

            await RevisionsService.updateRevision(data, id);
            res.status(201).json({message: "ACTUALIZADO CON ÉXITO"});
        }catch(e){
            res.status(500).json(e);
        }
    }
    
}

export { RevisionsController };