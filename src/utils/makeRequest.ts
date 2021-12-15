/* eslint-disable @typescript-eslint/no-unsafe-argument */
import centra from "@aero/centra";
import { HttpMethod, SendOptions, HookClientOptions } from "../typings";

export async function makeRequest(url: string, requestType: HttpMethod, clientOptions: HookClientOptions, body?: SendOptions): Promise<any> {
    let res = centra(url, requestType) as any;
    if (body) res.body(body, "json");
    if (["PATCH", "POST", "DELETE"].includes(requestType)) res.header("Content-Type", "application/json");
    res = await res.send("form");
    if (res.statusCode === 429 && clientOptions.retryOnLimit) {
        const retryAfter = res.body["retry_after"] as number;
        setTimeout(() => makeRequest(url, requestType, clientOptions, body), retryAfter);
    }
    return decode(res.body);
}

function decode(buffer: Buffer): any {
    if (buffer.length === 0) return null;
    return JSON.parse(buffer.toString());
}
