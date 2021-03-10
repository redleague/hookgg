"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClient = void 0;
const package_json_1 = require("../../package.json");
const Constants_1 = require("./Constants");
const axios_1 = __importDefault(require("axios"));
function createClient() {
    return axios_1.default.create({
        baseURL: Constants_1.baseURL,
        headers: {
            'User-Agent': `Hook.gg HTTP Handler (version: ${package_json_1.version})`,
            'Content-Type': 'application/json',
        }
    });
}
exports.createClient = createClient;
