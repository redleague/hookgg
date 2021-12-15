"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeRequest = void 0;
const tslib_1 = require("tslib");
/* eslint-disable @typescript-eslint/no-unsafe-argument */
const centra_1 = (0, tslib_1.__importDefault)(require("@aero/centra"));
async function makeRequest(url, requestType, clientOptions, body) {
    let res = (0, centra_1.default)(url, requestType);
    if (body)
        res.body(body, "json");
    if (["PATCH", "POST", "DELETE"].includes(requestType))
        res.header("Content-Type", "application/json");
    res = await res.send("form");
    if (res.statusCode === 429 && clientOptions.retryOnLimit) {
        const retryAfter = res.body["retry_after"];
        setTimeout(() => makeRequest(url, requestType, clientOptions, body), retryAfter);
    }
    return decode(res.body);
}
exports.makeRequest = makeRequest;
function decode(buffer) {
    if (buffer.length === 0)
        return null;
    return JSON.parse(buffer.toString());
}
