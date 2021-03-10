export declare type Payload = {
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
};
