"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const environments_1 = require("../../env/environments");
const apiJsonPlaceholder = axios_1.default.create({
    baseURL: environments_1.API_JSONPLACEHOLDER
});
exports.default = apiJsonPlaceholder;
