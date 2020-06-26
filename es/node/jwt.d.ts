export declare function decodeHeader<T>(token: string): T | null;
export declare function decodePayload<T>(token: string): T | null;
export declare function resolveTokenByHeader(headers: {
    [key: string]: string;
}): string;
export declare function verifySignature(token: string, secret: string): boolean;
export declare function verifyIsExpired(token: string): boolean;
export declare function verify<T extends {
    exp: number;
    iat: number;
}>(token: string, secret: string): T | null;
