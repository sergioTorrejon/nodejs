import { ddl_alter_table, ddl_create_table } from "./libraries/database/postgres/ddl/ddl.service";
import { dml_query_delete, dml_query_insert, dml_query_select, dml_query_update, dml_query_update_delete } from "./libraries/database/postgres/dml/dml.service";
import { ddl_query } from "./libraries/database/postgres/ddl/ddl";
import { dml_query } from "./libraries/database/postgres/dml/dml";

export const server = async () => {

        //PASAR A FUNCION

    const table = 't_prueba'

    const modelPaginate = {limit: 5,page:7}

    const pg_ddl_create = await ddl_query(ddl_create_table(table))
    console.log('pg_ddl_create/////////////', pg_ddl_create)

    const pg_ddl_alter = await ddl_query(ddl_alter_table(table))
    console.log('pg_ddl_alter/////////////', pg_ddl_alter)

    const pg_dml_select  = await dml_query(dml_query_select(table,modelPaginate))
    console.log('pg_dml_select/////////////', pg_dml_select)

    const pg_dml_insert = await dml_query(dml_query_insert(table, 'sergito'))
    console.log('pg_dml_insert/////////////', pg_dml_insert)

    const pg_dml_update = await dml_query(dml_query_update(table, 'sergiiiiiito',3))
    console.log('pg_dml_update/////////////', pg_dml_update)

    const pg_dml_delete_logic = await dml_query(dml_query_update_delete(table, 2))
    console.log('pg_dml_delete_logic/////////////', pg_dml_delete_logic)

    const pg_dml_delete = await dml_query(dml_query_delete(table, 2))
    console.log('pg_dml_delete////////////', pg_dml_delete)

    //await DB_INITIALIZE()
    return  true
}