import { appConfig } from "../../config/config";

export const config_pg = {
    user: appConfig.db.user,
    host: appConfig.db.host,
    database: appConfig.db.database,
    password: appConfig.db.password,
    port: +appConfig.db.port,
};