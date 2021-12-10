/* eslint-disable linebreak-style */
export const baseURL = "https://discord.com/api/v9";

type HttpMethod =
	| "OPTIONS"
	| "CONNECT"
	| "DELETE"
	| "TRACE"
	| "HEAD"
	| "POST"
	| "PUT"
	| "GET"
	| "PATCH";


export interface Payload {
    username?: string;
    avatar_url?: string;
    tts?: boolean;
    content?: string;
    embed?: {
        title?: string;
        color?: string;
        description?: string;
        author?: {
            name?: string;
            url?: string;
            icon_url?: string;
        };
        url?: string;
        fields?: {
            name?: string;
            value?: string;
            inline?: boolean;
        }[];
        image?: {
            url: string;
        };
        thumbnail?: {
            url: string;
        };
        footer?: {
            text?: string;
            icon_url?: string;
        };
        timestamp?: string;
    };
}
