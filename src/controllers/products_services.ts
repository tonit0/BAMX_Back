import { Request, Response } from "express";
import { ProductsServicesService } from "../services/products_services";

class ProductsServicesController {
    static getAll = async (_req:Request, res:Response) => { 
        try{      
            const response = await ProductsServicesService.getProductsServices();
            res.json(response);
        }catch(e){
            res.json(e);
        }  
    }

    static getProductServiceById = async (req:Request, res:Response) => { 
        try{   
            const id_get = req.params.id;   
            const response = await ProductsServicesService.getProductServiceById(id_get);
            res.json(response);
        }catch(e){
            res.status(500).json(e);
        }  
    }

    static insert = async ({ body }:Request, res:Response) => {
        try{       
            const response = await ProductsServicesService.insertProductService(body);
            res.status(201).json({message: "REGISTRADO CON ÉXITO"});
        }catch(e){
            res.status(500).json(e);
        }
    }

    static update = async (req:Request, res:Response) => {
        try{            
            const id = req.params.id;
            const data = req.body;

            await ProductsServicesService.updateProductService(data, id);
            res.status(201).json({message: "ACTUALIZADO CON ÉXITO"});
        }catch(e){
            res.status(500).json(e);
        }
    }
    
}

export { ProductsServicesController };