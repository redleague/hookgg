import centra from "@aero/centra";
import { HttpMethod, SendOptions, HookClientOptions } from "../typings";

export async function makeRequest(url: string, requestType: HttpMethod, body: SendOptions, clientOptions: HookClientOptions): Promise<any> {
    let res = centra(url, requestType).body(body, "json") as any;
    if (["PATCH", "POST"].includes(requestType)) res.header("Content-Type", "application/json");
    res = await res.send("form");
    if (res.statusCode === 429 && clientOptions.retryOnLimit) {
        const retryAfter = res.body["retry_after"] as number;
        setTimeout(() => makeRequest(url, requestType, body, clientOptions), retryAfter);
    }
    return res;
}
