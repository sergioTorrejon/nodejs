import * as dotenv from 'dotenv';
dotenv.config();

export const readEnv = (key:string): string|undefined=>{
    return process.env[key]
}

export const _readEnv = (key:string): string|number|undefined=>{
    return process.env[key]
}


export const getEnv =(Obj)=> {
    return _readEnv(Obj.envName)||Obj.default;
}

export const getEnvObj =(Obj)=> {
    Object.keys(Obj).forEach((key)=> {
        Obj[key] = _readEnv(Obj[key].envName)||Obj[key].default;
      }); 
    return Obj;
}
