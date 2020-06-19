import bcryptjs from "bcryptjs";
import forge from "node-forge";
export function genBCryptSalt(saltRounds = 10) {
    return bcryptjs.genSaltSync(saltRounds);
}
export function b_crypt_hash(data, saltRounds = 10) {
    return bcryptjs.hashSync(data, saltRounds);
}
export function HMAC_SHA256(text) {
    const hmac = forge.hmac.create();
    hmac.start("sha256", text);
    return hmac.digest().toHex();
}
export function SHA256(text) {
    const md = forge.md.sha256.create();
    return md.update(text).digest().toHex();
}
