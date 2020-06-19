import forge from "node-forge";
export class AES_CBC {
    static genRandomBytes(size = 32) {
        return forge.random.getBytesSync(size);
    }
    static bytesToHex(text) {
        return forge.util.bytesToHex(text);
    }
    static hexToBytes(text) {
        return forge.util.hexToBytes(text);
    }
    static encrypt(text, key, iv) {
        const cipher = forge.cipher.createCipher("AES-CBC", key);
        cipher.start({ iv: iv });
        cipher.update(forge.util.createBuffer(text));
        cipher.finish();
        return cipher.output.toHex();
    }
    static bufferToBytes(buf) {
        return forge.util.createBuffer(buf).bytes();
    }
    static decrypt(cipher, key, iv) {
        const decipher = forge.cipher.createDecipher("AES-CBC", key);
        decipher.start({ iv: iv });
        decipher.update(forge.util.createBuffer(forge.util.hexToBytes(cipher)));
        decipher.finish();
        return decipher.output.toHex();
    }
}
