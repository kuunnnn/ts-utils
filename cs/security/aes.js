"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AES_CBC = void 0;
const node_forge_1 = require("node-forge");
// eslint-disable-next-line
class AES_CBC {
    static genRandomBytes(size = 32) {
        return node_forge_1.default.random.getBytesSync(size);
    }
    static bytesToHex(text) {
        return node_forge_1.default.util.bytesToHex(text);
    }
    static hexToBytes(text) {
        return node_forge_1.default.util.hexToBytes(text);
    }
    /**
     * @param text
     * @param key hex string
     * @param iv hex string
     */
    static encrypt(text, key, iv) {
        const cipher = node_forge_1.default.cipher.createCipher('AES-CBC', node_forge_1.default.util.hexToBytes(key));
        cipher.start({ iv: node_forge_1.default.util.hexToBytes(iv) });
        cipher.update(node_forge_1.default.util.createBuffer(text));
        cipher.finish();
        return cipher.output.toHex();
    }
    static bufferToBytes(buf) {
        return node_forge_1.default.util.createBuffer(buf).bytes();
    }
    /**
     * @param cipher
     * @param key hex string
     * @param iv hex string
     */
    static decrypt(cipher, key, iv) {
        const decipher = node_forge_1.default.cipher.createDecipher('AES-CBC', node_forge_1.default.util.hexToBytes(key));
        decipher.start({ iv: node_forge_1.default.util.hexToBytes(iv) });
        decipher.update(node_forge_1.default.util.createBuffer(node_forge_1.default.util.hexToBytes(cipher)));
        decipher.finish();
        return decipher.output.toHex();
    }
}
exports.AES_CBC = AES_CBC;
//# sourceMappingURL=aes.js.map