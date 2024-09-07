import {config} from "dotenv"
config();
export const PORT = process.env.PORT ?? 3000 //nullish coalesing

export const API_JSONPLACEHOLDER = process.env.API_JSONPLACEHOLDER

export const application = {
    get NODE_DEV(){
        /*if(process.env.NODE_DEV === 'true'){
            return true
        }
        return*/
        //return process.env.NODE_DEV == 'true'//NODE_DEV === 'true'
        return process.env.NODE_DEV === 'true' ? true : false //ternario 
    }
}