/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import { makeRequest } from "../utils/makeRequest";

import { SendOptions, HookClientOptions } from "../typings";

export class HookClient {
    options: HookClientOptions;

    constructor(options: HookClientOptions) {
        this.options = options;
    }

    public async send(content: string, sendOptions?: SendOptions): Promise<any> {
        const opt = {
            ...sendOptions
        };

        opt.content = content;

        const res = await makeRequest(`${this.options.url}?wait=true`, "POST", opt, this.options);
        return res;
    }
}
