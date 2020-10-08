import NodeRSA from 'node-rsa';
declare class ProxyRsa {
    private key;
    constructor(rsa: NodeRSA);
    getPublicDer(): string;
    getPrivateDer(): string;
    /**
     * 用私钥加密
     * @param {string} data
     * @return {string}
     */
    encrypt(data: string): string;
    /**
     * 用公钥加密
     * @param {string} data
     * @return {string}
     */
    encryptByPublicKey(data: string): string;
    /**
     * 用私钥解密
     * @param {string} data
     * @return {string}
     */
    decrypt(data: string): string;
    /**
     * 用公钥解密
     * @param {string} data
     * @return {string}
     */
    decryptByPrivateKey(data: string): string;
    /**
     * 签名
     * @param {string} text
     * @return {string}
     */
    sing(text: string): void;
    /**
     * 验证签名
     * @param {string} text
     * @param {string} signature
     * @return {boolean}
     */
    verify(text: string, signature: string): boolean;
}
export declare function createRsaByPublicKey(publicPem: string): ProxyRsa;
export declare function createRsa(size?: number): ProxyRsa;
export declare function createRsaByPrivateKey(privatePem: string): ProxyRsa;
export {};
