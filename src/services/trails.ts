import { Trail } from './../interfaces/trail';
import { connection } from "../database";

class TrailsService {
    static getTrails = async () => {     
        let [rows] = await connection.execute('SELECT * FROM rutas ORDER BY id_ruta DESC');
        let trails: Trail[] = rows.map((r: any) => {
            return <Trail>r;
        })

        return trails;
    };

    static getTrailById = async (id: string) => {     
        let [rows] = await connection.execute('SELECT * FROM rutas WHERE id_ruta = ?', [id]);
        let trails: Trail[] = rows.map((r: any) => {
            return <Trail>r;
        })

        return trails;
    };

    static insertTrail = async (item: Trail) => {                
        await connection.query('INSERT INTO rutas SET ?', [item]);
        return item;  
    };

    static updateTrail = async (item: Trail, id: string) => {         
        await connection.query('UPDATE rutas SET ? WHERE id_ruta = ?', [item, id]);
        return item;
    };

}

export { TrailsService };