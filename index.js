'use strict'
const deepObjectFind = (...args) => {
    try{
        const [object, getValue, setValue] = args;
        const keys =  getValue.split(".");
        return keys.reduce((ob, cv, ci, arr) => {
            if (setValue && ci === arr.length-1){
                ob[cv] = setValue;
                return object;
            } else
                return ob[cv];
        }, object);
    } catch(e){
        throw new Error("Either object or input is invalid")
    }
}

module.exports = deepObjectFind;