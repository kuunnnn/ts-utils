/// <reference types="node" />
import { safeStringCompare, safeStringCompare2 } from "./compare";
import { AES_CBC } from "./security/aes";
import { ECDH } from "./security/dh";
import { genBCryptSalt, b_crypt_hash, HMAC_SHA256, SHA256 } from "./security/hash";
import { createRsa, createRsaByPrivateKey, createRsaByPublicKey } from "./security/rsa";
import { RegexpTool } from "./regexp-tool";
import { throwHttpError } from "./error-helper";
import svgCaptcha from "svg-captcha";
import safeRandomBytes from "randombytes";
export declare const Utils: {
    createCaptcha(): svgCaptcha.CaptchaObj;
    regexp: {
        phone: RegExp;
    };
    error: {
        throwHttpError: typeof throwHttpError;
    };
    safeRandomBytes: typeof import("crypto").randomBytes;
    security: {
        AES_CBC: typeof AES_CBC;
        ECDH: typeof ECDH;
        Hash: {
            genBCryptSalt: typeof genBCryptSalt;
            b_crypt_hash: typeof b_crypt_hash;
            HMAC_SHA256: typeof HMAC_SHA256;
            SHA256: typeof SHA256;
        };
        compare: {
            safeStringCompare2: typeof safeStringCompare2;
            safeStringCompare: typeof safeStringCompare;
        };
        Rsa: {
            createRsaByPublicKey: typeof createRsaByPublicKey;
            createRsaByPrivateKey: typeof createRsaByPrivateKey;
            createRsa: typeof createRsa;
        };
    };
};
export { svgCaptcha, createRsaByPrivateKey, throwHttpError, createRsa, createRsaByPublicKey, safeStringCompare, safeStringCompare2, SHA256, HMAC_SHA256, b_crypt_hash, genBCryptSalt, ECDH, AES_CBC, RegexpTool, safeRandomBytes, };
