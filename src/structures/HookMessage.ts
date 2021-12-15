/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import { makeRequest } from "../utils/makeRequest";
import { Embed, rawWebhookMessage, SendOptions, User } from "../typings";
import { HookClient } from "./HookClient";

export class HookMessage {
    url: string;
    client: HookClient;
    content: string;
    author: User;
    embeds: Embed[];
    timestamp: string;
    tts: boolean;
    pinned: boolean;
    id: string;
    components: any;

    constructor(rawMessage: rawWebhookMessage, url: string, client: HookClient) {
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
    public delete(): any {
        return makeRequest(`${this.url}/messages/${this.id}`, "DELETE", this.client.options);
    }

    /**
     *
     * @param opt Message Content | SendOptions
     * @param args SendOptions
     * @returns Promise<HookMessage>
     */
    public async edit(opt: string|SendOptions, args?: SendOptions): Promise<HookMessage> {
        if (typeof opt == "string") {
            opt = {
                content: opt,
                ...args
            };
        }

        return new HookMessage(await makeRequest(`${this.url}/messages/${this.id}`, "PATCH", this.client.options, opt), this.url, this.client);
    }
}
