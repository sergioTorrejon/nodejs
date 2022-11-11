import * as fs from 'fs';

// FILE READ JSON SIMPLE
const fileRead = (path:string)=>{
    try { 
        return JSON.parse(fs.readFileSync(path, 'utf8'));
    } 
    catch (err) { 
        return false; 
    } 
};

//MODULE
export const uJSON ={fileRead}
