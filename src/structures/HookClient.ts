/* eslint-disable @typescript-eslint/explicit-member-accessibility */
// import { makeRequest } from "../utils/makeRequest";

export interface HookClientOptions {
    url: string;
    avatar_url?: string;
    username?: string;
}

export class HookClient {
    public readonly url: string;
    public readonly avatar_url?: string;
    public readonly username?: string;

    constructor(options: HookClientOptions) {
        this.url = options.url;
        this.avatar_url = options.avatar_url;
        this.username = options.username;
    }

    public async send(content: string): Promise<any> {
        content;
    }
}
