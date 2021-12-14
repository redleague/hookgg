import centra from "@aero/centra";
import { HttpMethod, SendOptions, HookClientOptions } from "../typings";

export async function makeRequest(url: string, requestType: HttpMethod, body: SendOptions, clientOptions: HookClientOptions): Promise<any> {
    const res = centra(url, requestType).body(body, "json") as any;
    if (res.statusCode === 429 && clientOptions.retryOnLimit) {
        const retryAfter = res.body["retry_after"] as number;
        setTimeout(() => makeRequest(url, requestType, body, clientOptions), retryAfter);
    }
    return res;
}
