"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HookMessage = void 0;
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/explicit-member-accessibility */
const makeRequest_1 = require("../utils/makeRequest");
class HookMessage {
    constructor(rawMessage, url, client) {
        this.url = url;
        this.client = client;
        this.id = rawMessage.id;
        this.content = rawMessage.content;
        this.author = rawMessage.author;
        this.embeds = rawMessage.embeds;
        this.components = rawMessage.components;
        this.tts = rawMessage.tts;
        this.timestamp = rawMessage.timestamp;
        this.pinned = rawMessage.pinned;
    }
    /**
     *
     * @returns null
     */
    delete() {
        return (0, makeRequest_1.makeRequest)(`${this.url}/messages/${this.id}`, "DELETE", this.client.options);
    }
    /**
     *
     * @param opt Message Content | SendOptions
     * @param args SendOptions
     * @returns Promise<HookMessage>
     */
    async edit(opt, args) {
        if (typeof opt == "string") {
            opt = {
                content: opt,
                ...args
            };
        }
        return new HookMessage(await (0, makeRequest_1.makeRequest)(`${this.url}/messages/${this.id}`, "PATCH", this.client.options, opt), this.url, this.client);
    }
}
exports.HookMessage = HookMessage;
