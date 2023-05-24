import { VehFailure } from './../interfaces/veh_failure';
import { connection } from "../database";
import { VehiclesService } from './vehicles';

class VehFailuresService {
    static getVehFailures = async () => { 
        const response: any = [];     
        let [rows] = await connection.execute('SELECT * FROM fallas_vehiculos ORDER BY id_falla DESC');
        let veh_failures: VehFailure[] = rows.map((r: any) => {
            return <VehFailure>r;
        })

        for(let i = 0; i < veh_failures.length; i++) {
            const vehicle = await VehiclesService.getVehicleById(
                veh_failures[i].id_vehiculo!.toString()
            );
            delete veh_failures[i].id_vehiculo;
            veh_failures[i].vehiculo = vehicle[0];

            response.push(veh_failures[i]);
        }
        return response;
    };

    static getVehFailureById = async (id: string) => {     
        const response: any = [];     

        let [rows] = await connection.execute('SELECT * FROM fallas_vehiculos WHERE id_falla = ?', [id]);
        let veh_failures: VehFailure[] = rows.map((r: any) => {
            return <VehFailure>r;
        })

        for(let i = 0; i < veh_failures.length; i++) {
            const vehicle = await VehiclesService.getVehicleById(
                veh_failures[i].id_vehiculo!.toString()
            );
            delete veh_failures[i].id_vehiculo;
            veh_failures[i].vehiculo = vehicle[0];

            response.push(veh_failures[i]);
        }
        return response;
    };

    static insertVehFailure = async (item: VehFailure) => {                
        await connection.query('INSERT INTO fallas_vehiculos SET ?', [item]);
        return item;  
    };

    static updateVehFailure = async (item: VehFailure, id: string) => {         
        await connection.query('UPDATE fallas_vehiculos SET ? WHERE id_falla = ?', [item, id]);
        return item;
    };

}

export { VehFailuresService };