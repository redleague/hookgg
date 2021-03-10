import { ClientOptions } from '../types/ClientOptions';
import { Payload } from '../types/Payload';
export declare class HookClient {
    private _token;
    constructor(options: ClientOptions);
    send(originalPayload?: Payload): Promise<any>;
    private _post;
    getDetails(token: string): Promise<any>;
}
