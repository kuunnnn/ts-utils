import NodeRSA from 'node-rsa';
class ProxyRsa {
    constructor(rsa) {
        this.key = rsa;
    }
    getPublicDer() {
        return this.key.exportKey('pkcs8-public-pem');
    }
    getPrivateDer() {
        return this.key.exportKey('pkcs8-private-pem');
    }
    /**
     * 用私钥加密
     * @param {string} data
     * @return {string}
     */
    encrypt(data) {
        return this.key.encryptPrivate(Buffer.from(data), 'base64', 'utf8');
    }
    /**
     * 用公钥加密
     * @param {string} data
     * @return {string}
     */
    encryptByPublicKey(data) {
        return this.key.encrypt(Buffer.from(data), 'base64', 'utf8');
    }
    /**
     * 用私钥解密
     * @param {string} data
     * @return {string}
     */
    decrypt(data) {
        return this.key.decrypt(data, 'utf8');
    }
    /**
     * 用公钥解密
     * @param {string} data
     * @return {string}
     */
    decryptByPrivateKey(data) {
        return this.key.decryptPublic(data, 'utf8');
    }
    /**
     * 签名
     * @param {string} text
     * @return {string}
     */
    sing(text) {
        this.key.sign(Buffer.from(text), 'base64', 'utf8');
    }
    /**
     * 验证签名
     * @param {string} text
     * @param {string} signature
     * @return {boolean}
     */
    verify(text, signature) {
        return this.key.verify(Buffer.from(text), signature, 'utf8', 'base64');
    }
}
export function createRsaByPublicKey(publicPem) {
    const key = new NodeRSA(publicPem, 'pkcs8-public-pem');
    key.setOptions({ encryptionScheme: 'pkcs1' });
    return new ProxyRsa(key);
}
export function createRsa(size = 512) {
    const key = new NodeRSA({ b: size });
    key.setOptions({ encryptionScheme: 'pkcs1' });
    return new ProxyRsa(key);
}
export function createRsaByPrivateKey(privatePem) {
    const key = new NodeRSA(privatePem, 'pkcs8-private-pem');
    key.setOptions({ encryptionScheme: 'pkcs1' });
    return new ProxyRsa(key);
}
//# sourceMappingURL=rsa.js.map