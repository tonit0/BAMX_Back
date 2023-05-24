import { connection } from "../database";
import { Revision } from "../interfaces/revision";
import { VehiclesService } from "./vehicles";

class RevisionsService {
    static getRevisions = async () => {    
        const response: any = [];     
        let [rows] = await connection.execute('SELECT * FROM revisiones_diarias ORDER BY id_revision DESC');
        let revisions: Revision[] = rows.map((r: any) => {
            return <Revision>r;
        })

        for(let i = 0; i < revisions.length; i++) {
            const vehicle = await VehiclesService.getVehicleById(
                revisions[i].id_vehiculo!.toString()
            );
            delete revisions[i].id_vehiculo;
            revisions[i].vehiculo = vehicle[0];
            response.push(revisions[i]);
        }

        return response;
    };

    static getRevisionById = async (id: string) => { 
        const response: any = [];
        let [rows] = await connection.execute('SELECT * FROM revisiones_diarias WHERE id_revision = ?', [id]);
        let revisions: Revision[] = rows.map((r: any) => {
            return <Revision>r;
        })

        for(let i = 0; i < revisions.length; i++) {
            const vehicle = await VehiclesService.getVehicleById(
                revisions[i].id_vehiculo!.toString()
            );
            delete revisions[i].id_vehiculo;
            revisions[i].vehiculo = vehicle[0];
            response.push(revisions[i]);
        }

        return response;
    };

    static insertRevision = async (item: Revision) => {                
        await connection.query('INSERT INTO revisiones_diarias SET ?', [item]);
        return item;  
    };

    static updateRevision = async (item: Revision, id: string) => {         
        await connection.query('UPDATE revisiones_diarias SET ? WHERE id_revision = ?', [item, id]);
        return item;
    };

}

export { RevisionsService };