import { appConfig } from "../../../config/config";
import Audit from "../../../core/dto/audit.dto";


interface Comp {
    id?: number | undefined
    username: string
    password: string
    env:string
}

interface Aud {
  enabled:number 
  estado:boolean 
  usuario_creacion: string 
  fecha_creacion: Date
  usuario_modificacion: string 
  fecha_modificacion: Date
}

interface Pruuu extends Comp,Aud{}

class  PruebaBase{
  i//d?: number  = 0
  username: string = 'serg'
  password: string = 'torre'
  env:string = appConfig.server.env
}


const {id,...PPPP} :Pruuu = {
  ...new PruebaBase(),
  ...new Audit()
}

console.log('ppppppp',id)
console.log('ppppppp',PPPP)

const object = new PruebaBase()


const keysObj2 = Object.keys(object) 
const valuesObj2 = Object.values(object)  

const p_val =  keysObj2.map((o)=> `${o} = '${object[o]}'`)
console.log('alguna prou',p_val)



export const dml_query_select =(table:string,dto:any)=>
`
select "id",${keysObj2}
from ${table}
LIMIT ${parseInt(dto.limit)} OFFSET ${(parseInt(dto.page)-1)*(parseInt(dto.limit))}
`;


export const dml_query_insert =(table:string,values:string)=> 
`
INSERT INTO ${table} (${keysObj2}) 
VALUES (${valuesObj2.map((o)=>`'${o}'`)})
returning id,${Object.keys(PPPP)};
`;

export const dml_query_update =(table:string,values:string,id:number)=> 
`
UPDATE ${table} 
SET ${p_val} ,usuario_modificacion='Sergio', fecha_modificacion = now()
WHERE id = ${id}
returning id,${keysObj2};
`;

export const dml_query_update_delete =(table:string,id:number)=> 
`
UPDATE ${table} 
SET estado = false , fecha_modificacion = now()
WHERE id = ${id}
returning id,${keysObj2};
`;


export const dml_query_delete =(table:string,id:number)=> 
`
DELETE 
FROM ${table} 
WHERE id = ${id}
returning *
`;
