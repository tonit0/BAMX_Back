import { Request, Response } from "express";
import { VehiclesService } from "../services/vehicles";
var path = require('path')

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

    static insert = async (req: Request, res:Response) => {
        try{    
            if(req.files){
                const file: any = req.files.image;
                const extFile = path.extname(file.name);

                const allowedExtension = ['.png','.jpg','.jpeg'];

                if(!allowedExtension.includes(extFile)){
                    res.status(415).send("IMAGEN INVÁLIDA");
                }else{
                    let data = req.body;
                    await VehiclesService.insertVehicle(req.body);
                    const id = await VehiclesService.getLastId();

                    data.url_foto = id+extFile;
                    await VehiclesService.updateVehicle(data, id);
                    file.mv(process.env.FILES_ROOT + "vehiculos/" + id + extFile);
                    
                    res.status(201).json({message: "REGISTRADO CON ÉXITO"});
                }         
            }else{
                res.status(204).json({message: "IMAGEN ENVIADA"});
            } 
        }catch(e){
            res.status(500).json(e);
        }
    }

    static update = async (req:Request, res:Response) => {
        try{            
            const id = req.params.id;
            const data = req.body;

            await VehiclesService.updateVehicle(data, id);

            if(req.files){
                const allowedExtension = ['.png','.jpg','.jpeg'];
                const file: any = req.files.image;
                const extFile = path.extname(file.name);

                if(!allowedExtension.includes(extFile)){
                    res.status(415).send("IMAGEN INVÁLIDA");
                }else{
                    data.url_foto = id+extFile;
                    await VehiclesService.updateVehicle(data, id);
                    file.mv(process.env.FILES_ROOT + "vehiculos/" + id + extFile);
                }
            }

            res.status(201).json({message: "ACTUALIZADO CON ÉXITO"});
        }catch(e){
            res.status(500).json(e);
        }
    }
}

export { VehiclesController };