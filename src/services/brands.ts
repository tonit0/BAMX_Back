import { Brand } from "../interfaces/brand";
import { connection } from "../database";
class BrandsService {
    static getBrands = async () => {     
        let [rows] = await connection.execute('SELECT * FROM marcas_vehiculos ORDER BY id_marca DESC');
        let brands: Brand[] = rows.map((r: any) => {
            return <Brand>r;
        })

        return brands;
    };

    static getBrandById = async (id: string) => {     
        let [rows] = await connection.execute('SELECT * FROM marcas_vehiculos WHERE id_marca = ?', [id]);
        let brands: Brand[] = rows.map((r: any) => {
            return <Brand>r;
        })

        return brands;
    };

    static insertBrand = async (item: Brand) => {                
        await connection.query('INSERT INTO marcas_vehiculos SET ?', [item]);
        return item;  
    };

    static updateBrand = async (item: Brand, id: string) => {         
        await connection.query('UPDATE marcas_vehiculos SET ? WHERE id_marca = ?', [item, id]);
        return item;
    };
}

export { BrandsService };