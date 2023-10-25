'use strict'
import { DataBase } from './database.js';

class Table{
    #table_name ='';
    constructor(tableName){
        this.#table_name = tableName;
    }
    All(){
        return this.#table_name ;
    }
}

export { Table };