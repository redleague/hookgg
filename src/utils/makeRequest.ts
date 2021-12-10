import centra, { Request } from "@aero/centra";
import { HttpMethod } from "../typings";

export async function makeRequest(url: string, requestType: HttpMethod, body: any): Promise<Request> {
    const res = await centra(url, requestType).body(body, "json");
    return res;
}
