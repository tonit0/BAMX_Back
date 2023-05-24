import { Request, Response } from "express";
import { InputsOutputsService } from "../services/inputs_outputs";

class InputsOutputsController {
    static getAll = async (_req:Request, res:Response) => { 
        try{      
            const response = await InputsOutputsService.getInputsOutputs();
            res.json(response);
        }catch(e){
            res.json(e);
        }  
    }

    static getInputOutputById = async (req:Request, res:Response) => { 
        try{   
            const id_get = req.params.id;   
            const response = await InputsOutputsService.getInputOutputById(id_get);
            res.json(response);
        }catch(e){
            res.status(500).json(e);
        }  
    }

    static insert = async ({ body }:Request, res:Response) => {
        try{       
            const response = await InputsOutputsService.insertInputOutput(body);
            res.status(201).json({message: "REGISTRADO CON ÉXITO"});
        }catch(e){
            res.status(500).json(e);
        }
    }

    static update = async (req:Request, res:Response) => {
        try{            
            const id = req.params.id;
            const data = req.body;

            await InputsOutputsService.updateInputOutput(data, id);
            res.status(201).json({message: "ACTUALIZADO CON ÉXITO"});
        }catch(e){
            res.status(500).json(e);
        }
    }
    
}

export { InputsOutputsController };