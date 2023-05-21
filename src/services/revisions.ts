import { connection } from "../database";
import { Revision } from "../interfaces/revision";

class RevisionsService {
    static getRevisions = async () => {     
        let [rows] = await connection.execute('SELECT * FROM revisiones_diarias ORDER BY id_revision DESC');
        let revisions: Revision[] = rows.map((r: any) => {
            return <Revision>r;
        })

        return revisions;
    };

    static getRevisionById = async (id: string) => {     
        let [rows] = await connection.execute('SELECT * FROM revisiones_diarias WHERE id_revision = ?', [id]);
        let revisions: Revision[] = rows.map((r: any) => {
            return <Revision>r;
        })

        return revisions;
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