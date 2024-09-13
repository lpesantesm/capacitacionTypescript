"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const apiJsonPlaceHolder_1 = __importDefault(require("../apis/apiJsonPlaceHolder"));
const routes = (0, express_1.Router)();
routes.get('/all', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //const usuarios: UserI[] = await fetch('https://jsonplaceholder.typicode.com/users').then( r => r.json())
        const usuarios = yield apiJsonPlaceHolder_1.default.get('/users');
        const nuevoArregloUsuario = usuarios.data.map((usuario) => {
            return {
                nombre: usuario.name,
                nombreUsuario: usuario.username,
                email: usuario.email,
                telefono: usuario.phone,
                nombreCompañia: usuario.company.name
            };
        });
        res.json(nuevoArregloUsuario);
    }
    catch (error) {
        throw error;
    }
}));
exports.default = routes;
