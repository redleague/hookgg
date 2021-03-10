"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HookError = void 0;
const http_1 = require("http");
class HookError extends Error {
    constructor(errorMessage, statusCode = 200) {
        super(errorMessage);
        this.name = "HookError";
        this.status = http_1.STATUS_CODES[statusCode];
    }
    ;
}
exports.HookError = HookError;
;
