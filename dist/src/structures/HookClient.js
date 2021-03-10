"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HookClient = void 0;
const RequestHandler_1 = require("../utils/RequestHandler");
const ErrorHandler_1 = require("../utils/ErrorHandler");
const axios_1 = __importDefault(require("axios"));
class HookClient {
    constructor(options) {
        this._token = options.token;
    }
    send(originalPayload) {
        if (!this._token)
            throw new ErrorHandler_1.HookError('Cannot send a webhook without a token');
        if (!originalPayload)
            throw new ErrorHandler_1.HookError('Cannot send a empty webhook!');
        const payload = {
            username: originalPayload.username ? originalPayload.username : 'Hook.gg',
            avatar_url: originalPayload.avatar_url ? originalPayload.avatar_url : '',
            content: originalPayload.content ? originalPayload.content : '',
            tts: originalPayload ? originalPayload.tts : false,
            embeds: originalPayload && typeof originalPayload === 'object' && originalPayload.embed ? [originalPayload.embed] : ''
        };
        return new Promise((resolve, reject) => {
            this._post(payload)
                .then(res => resolve(res.data))
                .catch(e => reject(e));
        });
    }
    async _post(payload) {
        const client = RequestHandler_1.createClient();
        let creds = await this.getDetails(this._token);
        return new Promise((resolve, reject) => {
            client.post(`/webhooks/${creds.id}/${creds.token}`, payload)
                .then(res => resolve(res.data))
                .catch(e => reject(e));
        });
    }
    getDetails(token) {
        return axios_1.default.get(token)
            .then(res => res.data);
    }
}
exports.HookClient = HookClient;
