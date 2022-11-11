import { Client } from 'pg';
import { config_pg } from '../connect';

////CREATE TABLE

export const ddl_query =async (query:string)=>{ 
    const conn = new Client(config_pg)
    try {
        await conn.connect();           
        await conn.query(query)
        .catch(err => {throw new Error (err.message)});
        return ({resp:true, message: 'Se ejecuto correctamente'});
    } catch (error) {
        if (error instanceof Error) {
            return ({resp:false, error: error.message });
        }
    } finally {
        await conn.end();               // closes connection
    }
}