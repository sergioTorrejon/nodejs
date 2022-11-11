export const SERVER_ENV = {
 
    prod:{
        host : {envName:'SERVER_HOST', default:'http://localhost', type:'string'},
        port : {envName:'SERVER_PORT', default:3000, type:'number'},
    },
    dev: {
        host : {envName:'SERVER_HOST_DEV', default:'http://localhost', type:'string'},
        port : {envName:'SERVER_PORT_DEV', default:3005, type:'number'},
    },
    test : {
        host : {envName:'SERVER_HOST_TEST', default:'http://localhost', type:'string'},
        port : {envName:'SERVER_PORT_TEST', default:3004, type:'number'},
    },

    //CONFIGURACIONES
    config : {
        env :{envName:'CONFIG_ENV', default:'prod', type:'string'},
        secretKey : {envName:'SECRET_KEY', default:'secretkey', type:'string'},
        pathStorage : {envName:'PATH_STORAGE', default:process.cwd(), type:'string'},
    },
}



