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

export interface SendOptions {
    content?: string;
    embeds?: Embed[];
    components?: [];
    allowed_mentions?: boolean;
    tts?: boolean;
    username?: string;
    avatar_url?: string;
}

export interface HookClientOptions {
    url: string;
    retryOnLimit?: boolean;
}

export interface Embed {
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
}
