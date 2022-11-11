import { getEnvObj } from "../tools/helpers/dotenv.util"
import { DB_ENV } from "./db/db.env"
import { SERVER_ENV } from "./server/server.env"

const server = () =>{
    const nuevo = getEnvObj({...SERVER_ENV.config})
    const neu  = getEnvObj({...SERVER_ENV[nuevo.env]})
    return {...nuevo,...neu}
}

export const appConfig = {
    server : server(),
    db : getEnvObj({...DB_ENV})
}