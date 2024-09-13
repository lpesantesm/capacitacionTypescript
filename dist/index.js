"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./modules/auth/routes"));
const environments_1 = require("./env/environments");
const routes_2 = __importDefault(require("./modules/users/routes"));
//console.log("holamundo");np
const app = (0, express_1.default)();
const prefix = '/api';
// routes 
app.use(`${prefix}/auth`, routes_1.default);
app.use(`${prefix}/users`, routes_2.default);
app.listen(environments_1.PORT, () => {
    console.log('el servidor esta funcionando en el puerto:', environments_1.PORT);
    console.log(`${prefix}/usuario`);
    console.log(`Mode ${environments_1.application.NODE_DEV ? 'Desarrollo' : 'Produccion'}`);
});
