"use strict";
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/explicit-member-accessibility */
Object.defineProperty(exports, "__esModule", { value: true });
exports.HookClient = void 0;
const makeRequest_1 = require("../utils/makeRequest");
const HookMessage_1 = require("./HookMessage");
class HookClient {
    constructor(options) {
        this.options = options;
    }
    /**
     *
     * @param opt Message Content | SendOptions
     * @param args SendOptions
     * @returns Promise<HookMessage>
     */
    async send(opt, args) {
        if (typeof opt == "string") {
            opt = {
                content: opt,
                ...args
            };
        }
        return new HookMessage_1.HookMessage(await (0, makeRequest_1.makeRequest)(`${this.options.url}?wait=true`, "POST", this.options, opt), this.options.url, this);
    }
    /**
     *
     * @param id Snowflake - Id for fetching the webhook message
     * @returns Promise<HookMessage>
     */
    async fetchMessage(id) {
        return new HookMessage_1.HookMessage(await (0, makeRequest_1.makeRequest)(`${this.options.url}/messages/${id}`, "GET", this.options), this.options.url, this);
    }
}
exports.HookClient = HookClient;
