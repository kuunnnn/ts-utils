export declare class AES_CBC {
    static genRandomBytes(size?: number): string;
    static bytesToHex(text: string): string;
    static hexToBytes(text: string): string;
    /**
     *
     * @param text
     * @param key hex string
     * @param iv hex string
     */
    static encrypt(text: string, key: string, iv: string): string;
    static bufferToBytes(buf: string): string;
    /**
     *
     * @param cipher
     * @param key hex string
     * @param iv hex string
     */
    static decrypt(cipher: string, key: string, iv: string): string;
}
