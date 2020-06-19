import { safeStringCompare, safeStringCompare2 } from "./compare";
import { AES_CBC } from "./security/aes";
import { ECDH } from "./security/dh";
import {
  genBCryptSalt,
  b_crypt_hash,
  HMAC_SHA256,
  SHA256,
} from "./security/hash";
import {
  createRsa,
  createRsaByPrivateKey,
  createRsaByPublicKey,
} from "./security/rsa";
import { RegexpTool } from "./regexp-tool";
import { throwHttpError } from "./error-helper";
import svgCaptcha from "svg-captcha";
import safeRandomBytes from "randombytes";

export const Utils = {
  createCaptcha() {
    return svgCaptcha.create();
  },
  regexp: RegexpTool,
  error: {
    throwHttpError,
  },
  safeRandomBytes: safeRandomBytes,
  security: {
    AES_CBC,
    ECDH,
    Hash: {
      genBCryptSalt,
      b_crypt_hash,
      HMAC_SHA256,
      SHA256,
    },
    compare: {
      safeStringCompare2,
      safeStringCompare,
    },
    Rsa: {
      createRsaByPublicKey,
      createRsaByPrivateKey,
      createRsa,
    },
  },
};

export {
  svgCaptcha,
  createRsaByPrivateKey,
  throwHttpError,
  createRsa,
  createRsaByPublicKey,
  safeStringCompare,
  safeStringCompare2,
  SHA256,
  HMAC_SHA256,
  b_crypt_hash,
  genBCryptSalt,
  ECDH,
  AES_CBC,
  RegexpTool,
  safeRandomBytes,
};
