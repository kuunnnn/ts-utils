// @ts-ignore
import crypto from 'crypto-browserify';
export class ECDH {
    constructor() {
        this.ecdh = crypto.createECDH('secp256k1');
    }
    getPublicKey() {
        return this.ecdh.generateKeys('hex');
    }
    getSecret(key) {
        return this.ecdh.computeSecret(key, 'hex', 'hex');
    }
}
//# sourceMappingURL=ecdh.js.map