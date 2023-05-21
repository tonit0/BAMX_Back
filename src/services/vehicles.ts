import { connection } from "../database";
import { Vehicle } from "../interfaces/vehicle";

class VehiclesService {
    static getVehicles = async () => {     
        let [rows] = await connection.execute('SELECT * FROM vehiculos ORDER BY id_vehiculo DESC');
        let vehicles: Vehicle[] = rows.map((r: any) => {
            return <Vehicle>r;
        })

        return vehicles;
    };

    static getVehicleById = async (id: string) => {     
        let [rows] = await connection.execute('SELECT * FROM vehiculos WHERE id_vehiculo = ?', [id]);
        let vehicles: Vehicle[] = rows.map((r: any) => {
            return <Vehicle>r;
        })

        return vehicles;
    };

    static insertVehicle = async (item: Vehicle) => {                
        await connection.query('INSERT INTO vehiculos SET ?', [item]);
        return item;  
    };

    static updateVehicle = async (item: Vehicle, id: string) => {         
        await connection.query('UPDATE vehiculos SET ? WHERE id_vehiculo = ?', [item, id]);
        return item;
    };

}

export { VehiclesService };