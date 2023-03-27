/**
 * Copyright (c) 2020, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
import * as $ from 'jquery';

class AutoBotService {

    constructor() {
        
    }


    postDataToAssistant(payload) : Promise<any>{

        return new Promise((resolve,reject) => {
            let query = 'http://localhost:5000/askIndex';
            $.ajax(query,{
                type: 'POST',
                cache: false,
                dataType: 'text',
                data: JSON.stringify(payload),
                "headers": {
                    "Content-Type":"application/json"
                }
            }).done((res) => {
                resolve(res);
            }).fail((err)=>{
                reject(err);

            });
        });
    }

}

let autoBotService = new AutoBotService();

export  {  autoBotService };
