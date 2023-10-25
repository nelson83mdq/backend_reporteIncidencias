'use strict'

class Table{
    #name = '';
    constructor(name){
        this.#name = name ;
    }

    view(){
        return this.#name ;
    }

}
export { Table };