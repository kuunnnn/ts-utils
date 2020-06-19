export declare class AES_CBC {
    static genRandomBytes(size?: number): string;
    static bytesToHex(text: string): string;
    static hexToBytes(text: string): string;
    static encrypt(text: string, key: string, iv: string): string;
    static bufferToBytes(buf: string): string;
    static decrypt(cipher: string, key: string, iv: string): string;
}
