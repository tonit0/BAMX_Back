import { Provider } from './../interfaces/provider';
import { connection } from "../database";

class ProvidersService {
    static getProviders = async () => {     
        let [rows] = await connection.execute('SELECT * FROM proveedores ORDER BY id_proveedor DESC');
        let providers: Provider[] = rows.map((r: any) => {
            return <Provider>r;
        })

        return providers;
    };

    static getProviderById = async (id: string) => {     
        let [rows] = await connection.execute('SELECT * FROM proveedores WHERE id_proveedor = ?', [id]);
        let providers: Provider[] = rows.map((r: any) => {
            return <Provider>r;
        })

        return providers;
    };

    static insertProvider = async (item: Provider) => {                
        await connection.query('INSERT INTO proveedores SET ?', [item]);
        return item;  
    };

    static updateProvider = async (item: Provider, id: string) => {         
        await connection.query('UPDATE proveedores SET ? WHERE id_proveedor = ?', [item, id]);
        return item;
    };


}

export { ProvidersService };