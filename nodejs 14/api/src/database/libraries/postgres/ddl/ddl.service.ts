export const ddl_create_table =(table:string)=> `
CREATE TABLE IF NOT EXISTS ${table} (
    id serial NOT NULL,
    username varchar(45) NOT NULL,
    password varchar(450) NOT NULL,
    enabled integer NOT NULL DEFAULT '1',
    estado bool NOT NULL DEFAULT true,
    usuario_creacion varchar(50) NOT NULL DEFAULT 'Admin'::character varying,
    fecha_creacion timestamp NOT NULL DEFAULT now(),
    usuario_modificacion varchar(50) NOT NULL DEFAULT 'Admin'::character varying,
    fecha_modificacion timestamp NOT NULL DEFAULT now(),
    CONSTRAINT "PK_${table}" PRIMARY KEY (id)
  )
`;

export const ddl_alter_table =(table:string)=> `
ALTER TABLE ${table} 
ADD COLUMN IF NOT EXISTS env  varchar(5) NOT NULL DEFAULT 'prod'::character varying;
`;