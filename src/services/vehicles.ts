import { connection } from "../database";
import { Vehicle } from "../interfaces/vehicle";
import { BrandsService } from "./brands";

class VehiclesService {
    static getVehicles = async () => {
        const response: any = [];     
        let [rows] = await connection.execute('SELECT * FROM vehiculos ORDER BY id_vehiculo DESC');
        let vehicles: Vehicle[] = rows.map((r: any) => {
            return <Vehicle>r;
        })

        for(let i = 0; i < vehicles.length; i++) {
            const brand = await BrandsService.getBrandById(
                vehicles[i].id_marca!.toString()
            );
            delete vehicles[i].id_marca;
            vehicles[i].marca = brand[0];
            response.push(vehicles[i]);
        }

        return response;
    };

    static getVehicleById = async (id: string) => {  
        const response: any = [];     
        let [rows] = await connection.execute('SELECT * FROM vehiculos WHERE id_vehiculo = ?', [id]);
        let vehicles: Vehicle[] = rows.map((r: any) => {
            return <Vehicle>r;
        })

        for(let i = 0; i < vehicles.length; i++) {
            const brand = await BrandsService.getBrandById(
                vehicles[i].id_marca!.toString()
            );
            delete vehicles[i].id_marca;
            vehicles[i].marca = brand[0];
            response.push(vehicles[i]);
        }

        return response;
    };

    static insertVehicle = async (item: Vehicle) => {                
        await connection.query('INSERT INTO vehiculos SET ?', [item]);
        return item;  
    };

    static updateVehicle = async (item: Vehicle, id: string) => {         
        await connection.query('UPDATE vehiculos SET ? WHERE id_vehiculo = ?', [item, id]);
        return item;
    };

    static getLastId = async () => {
        let [rows] = await connection.query('SELECT id_vehiculo from vehiculos ORDER BY id_vehiculo DESC LIMIT 1;');
        let veh = rows.map((r: any) => {
            return r;
        });
        return veh[0]['id_vehiculo'];
    };

}

export { VehiclesService };