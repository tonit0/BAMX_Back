import { InputOutput } from './../interfaces/input_output';
import { connection } from "../database";

class InputsOutputsService {
    static getInputsOutputs = async () => {     
        let [rows] = await connection.execute('SELECT * FROM entradas_salidas ORDER BY id_entrada_salida DESC');
        let inputs_outputs: InputOutput[] = rows.map((r: any) => {
            return <InputOutput>r;
        })

        return inputs_outputs;
    };

    static getInputOutputById = async (id: string) => {     
        let [rows] = await connection.execute('SELECT * FROM entradas_salidas WHERE id_entrada_salida = ?', [id]);
        let inputs_outputs: InputOutput[] = rows.map((r: any) => {
            return <InputOutput>r;
        })

        return inputs_outputs;
    };

    static insertInputOutput = async (item: InputOutput) => {                
        await connection.query('INSERT INTO entradas_salidas SET ?', [item]);
        return item;  
    };

    static updateInputOutput = async (item: InputOutput, id: string) => {         
        await connection.query('UPDATE entradas_salidas SET ? WHERE id_entrada_salida = ?', [item, id]);
        return item;
    };

}

export { InputsOutputsService };