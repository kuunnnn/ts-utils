"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SHA256 = exports.HMAC_SHA256 = exports.b_crypt_hash = exports.genBCryptSalt = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const node_forge_1 = __importDefault(require("node-forge"));
function genBCryptSalt(saltRounds = 10) {
    return bcryptjs_1.default.genSaltSync(saltRounds);
}
exports.genBCryptSalt = genBCryptSalt;
function b_crypt_hash(data, saltRounds = 10) {
    return bcryptjs_1.default.hashSync(data, saltRounds);
}
exports.b_crypt_hash = b_crypt_hash;
function HMAC_SHA256(text, secret) {
    const hmac = node_forge_1.default.hmac.create();
    if (secret) {
        hmac.start("sha256", secret);
        hmac.update(text);
    }
    else {
        hmac.start("sha256", text);
    }
    return hmac.digest().toHex();
}
exports.HMAC_SHA256 = HMAC_SHA256;
function SHA256(text) {
    const md = node_forge_1.default.md.sha256.create();
    return md.update(text).digest().toHex();
}
exports.SHA256 = SHA256;
