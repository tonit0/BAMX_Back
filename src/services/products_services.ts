import { ProductService } from './../interfaces/product_service';
import { connection } from "../database";

class ProductsServicesService {
    static getProductsServices = async () => {     
        let [rows] = await connection.execute('SELECT * FROM productos_servicios ORDER BY id_producto_servicio DESC');
        let products_services: ProductService[] = rows.map((r: any) => {
            return <ProductService>r;
        })

        return products_services;
    };

    static getProductServiceById = async (id: string) => {     
        let [rows] = await connection.execute('SELECT * FROM productos_servicios WHERE id_producto_servicio = ?', [id]);
        let products_services: ProductService[] = rows.map((r: any) => {
            return <ProductService>r;
        })

        return products_services;
    };

    static insertProductService = async (item: ProductService) => {                
        await connection.query('INSERT INTO productos_servicios SET ?', [item]);
        return item;  
    };

    static updateProductService = async (item: ProductService, id: string) => {         
        await connection.query('UPDATE productos_servicios SET ? WHERE id_producto_servicio = ?', [item, id]);
        return item;
    };


}

export { ProductsServicesService };