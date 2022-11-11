import { DataSource } from 'typeorm';
import { appConfig } from '../../config/config';

//const env = ENVVV.isProd
export const conn =  (database:string, ent:any) => {
  return new DataSource({
    type: 'postgres',
    host: appConfig.db.host,
    port: Number(+appConfig.db.port),
    username: appConfig.db.user,
    password: appConfig.db.password,
    database: appConfig.db.database,
    synchronize: true,
    logging: false,
    //entities: ent,
  })

}

export const DATABASE_CONFIG ={
  ADMIN : conn('ADMIN',[]),
  }

  export const DB_INITIALIZE = async () =>{
      console.log('INICIANDO BASE DE DATOS ADMIN')
      await DATABASE_CONFIG.ADMIN.initialize();
      console.log('db_admin OK')
  }
