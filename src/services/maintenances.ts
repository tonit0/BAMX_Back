import { Maintenance } from './../interfaces/maintenance';
import { connection } from "../database";
import { VehiclesService } from './vehicles';
import { ProvidersService } from './providers';

class MaintenancesService {
    static getMaintenances = async () => {
        const response: any = [];     
        let [rows] = await connection.execute('SELECT * FROM mantenimientos ORDER BY id_mantenimiento DESC');
        let maintenances: Maintenance[] = rows.map((r: any) => {
            return <Maintenance>r;
        })

        for(let i = 0; i < maintenances.length; i++) {
            const vehicle = await VehiclesService.getVehicleById(
                maintenances[i].id_vehiculo!.toString()
            );
            delete maintenances[i].id_vehiculo;
            maintenances[i].vehiculo = vehicle[0];

            const provider = await ProvidersService.getProviderById(
                maintenances[i].id_proveedor!.toString()
            );
            delete maintenances[i].id_proveedor;
            maintenances[i].proveedor = provider[0];

            response.push(maintenances[i]);
        }

        return response;
    };

    static getMaintenanceById = async (id: string) => {
        const response: any = [];     
        let [rows] = await connection.execute('SELECT * FROM mantenimientos WHERE id_mantenimiento = ?', [id]);
        let maintenances: Maintenance[] = rows.map((r: any) => {
            return <Maintenance>r;
        })

        for(let i = 0; i < maintenances.length; i++) {
            const vehicle = await VehiclesService.getVehicleById(
                maintenances[i].id_vehiculo!.toString()
            );
            delete maintenances[i].id_vehiculo;
            maintenances[i].vehiculo = vehicle[0];

            const provider = await ProvidersService.getProviderById(
                maintenances[i].id_proveedor!.toString()
            );
            delete maintenances[i].id_proveedor;
            maintenances[i].proveedor = provider[0];

            response.push(maintenances[i]);
        }

        return response;
    };

    static insertMaintenance = async (item: Maintenance) => {                
        await connection.query('INSERT INTO mantenimientos SET ?', [item]);
        return item;  
    };

    static updateMaintenance = async (item: Maintenance, id: string) => {         
        await connection.query('UPDATE mantenimientos SET ? WHERE id_mantenimiento = ?', [item, id]);
        return item;
    };

}

export { MaintenancesService };