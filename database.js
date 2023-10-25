'use strict'
import sqlite3  from 'sqlite3'; 
  
class DataBase{
    #db = null;
    constructor(path){
        this.#db = new sqlite3.Database(path, (err)=>{
            if (err) { console.log("Error Ocurred - "+ err.message) ; 
            } else {
                console.log("Conexión completa");
            }
        });
    }

    bound_DB(){
        return this.#db;
    }
    
}
/*
// Connecting Database 
var db = new sqlite3.Database("Incidencias.db" , (err) => { 
    if(err) { 
        console.log("Error Occurred - " + err.message); 
    } else { 
        console.log("DataBase Connected"); 
    } 
}) */

export {DataBase };