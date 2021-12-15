/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/explicit-member-accessibility */

import { makeRequest } from "../utils/makeRequest";
import { HookMessage } from "./HookMessage";

import { SendOptions, HookClientOptions } from "../typings";

export class HookClient {
    options: HookClientOptions;

    constructor(options: HookClientOptions) {
        this.options = options;
    }

    /**
     *
     * @param opt Message Content | SendOptions
     * @param args SendOptions
     * @returns Promise<HookMessage>
     */
    public async send(opt: string|SendOptions, args?: SendOptions): Promise<any> {
        if (typeof opt == "string") {
            opt = {
                content: opt,
                ...args
            };
        }

        return new HookMessage(await makeRequest(`${this.options.url}?wait=true`, "POST", this.options, opt), this.options.url, this);
    }
}
