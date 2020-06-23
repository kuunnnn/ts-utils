"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ECDH = void 0;
// @ts-ignore
const crypto_browserify_1 = __importDefault(require("crypto-browserify"));
class ECDH {
    constructor() {
        this.ecdh = crypto_browserify_1.default.createECDH("secp256k1");
    }
    getPublicKey() {
        return this.ecdh.generateKeys("hex");
    }
    getSecret(key) {
        return this.ecdh.computeSecret(key, "hex", "hex");
    }
}
exports.ECDH = ECDH;
