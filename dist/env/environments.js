"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.application = exports.API_JSONPLACEHOLDER = exports.PORT = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000; //nullish coalesing
exports.API_JSONPLACEHOLDER = process.env.API_JSONPLACEHOLDER;
exports.application = {
    get NODE_DEV() {
        /*if(process.env.NODE_DEV === 'true'){
            return true
        }
        return*/
        //return process.env.NODE_DEV == 'true'//NODE_DEV === 'true'
        return process.env.NODE_DEV === 'true' ? true : false; //ternario 
    }
};
