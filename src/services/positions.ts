import { connection } from "../database";
import { Position } from "../interfaces/position";

class PositionsService {
    static getPositions = async () => {     
        let [rows] = await connection.execute('SELECT * FROM puestos ORDER BY id_puesto DESC');
        let positions: Position[] = rows.map((r: any) => {
            return <Position>r;
        })

        return positions;
    };

    static getPositionById = async (id: string) => {     
        let [rows] = await connection.execute('SELECT * FROM puestos WHERE id_puesto = ?', [id]);
        let positions: Position[] = rows.map((r: any) => {
            return <Position>r;
        })

        return positions;
    };

    static insertPosition = async (item: Position) => {                
        await connection.query('INSERT INTO puestos SET ?', [item]);
        return item;  
    };

    static updatePosition = async (item: Position, id: string) => {         
        await connection.query('UPDATE puestos SET ? WHERE id_puesto = ?', [item, id]);
        return item;
    };

}

export { PositionsService };