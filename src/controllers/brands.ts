import { Request, Response } from "express";
import { BrandsService } from "../services/brands";

class BrandsController {
    static getAll = async (_req:Request, res:Response) => { 
        try{      
            const response = await BrandsService.getBrands();
            res.json(response);
        }catch(e){
            res.json(e);
        }  
    }

    static getBrandById = async (req:Request, res:Response) => { 
        try{   
            const id_get = req.params.id;   
            const response = await BrandsService.getBrandById(id_get);
            res.json(response);
        }catch(e){
            res.status(500).json(e);
        }  
    }

    static insert = async ({ body }:Request, res:Response) => {
        try{       
            const response = await BrandsService.insertBrand(body);
            res.status(201).json({message: "REGISTRADO CON ÉXITO"});
        }catch(e){
            res.status(500).json(e);
        }
    }

    static update = async (req:Request, res:Response) => {
        try{            
            const id = req.params.id;
            const data = req.body;

            await BrandsService.updateBrand(data, id);
            res.status(201).json({message: "ACTUALIZADO CON ÉXITO"});
        }catch(e){
            res.status(500).json(e);
        }
    }
}

export { BrandsController };