import { Client } from 'pg';
import { config_pg } from '../connect';

export const dml_query = async (query:string) => {
    //console.log(query)
    const conn = new Client(config_pg)
    try {
        await conn.connect();           // gets connection
        const result = await conn
            .query(query)
            .then(res => res.rows)
            .catch(err => {throw new Error (err.message)});
        return {resp:true, data:result };
    } catch (error) {
        if (error instanceof Error) {
            return ({resp:false, error: error.message });
        }
    } finally {
        await conn.end();               // closes connection
    }
};

export const dml_query_select = async (query:string) => {
    //console.log(query)
    const conn = new Client(config_pg)
    try {
        await conn.connect();           // gets connection
        const result = await conn
            .query(query)
            .then(res => res.rows)
            .catch(err => {throw new Error (err.message)});
        return {resp:true, data:result };
    } catch (error) {
        if (error instanceof Error) {
            return ({resp:false, error: error.message });
        }
    } finally {
        await conn.end();               // closes connection
    }
};