"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verify = exports.verifyIsExpired = exports.verifySignature = exports.resolveTokenByHeader = exports.decodePayload = exports.decodeHeader = void 0;
const hash_1 = require("../security/hash");
const compare_1 = require("../compare");
function hexToJwtBase64(hex) {
    const base64 = Buffer.from(hex, "hex").toString("base64");
    return base64.replace(/=/g, "")
        .replace(/\+/g, "-")
        .replace(/\//g, "_");
}
function throw401Error(msg) {
    const error = new Error(msg);
    error.name = "AuthorizationError";
    error.status = 401;
    throw error;
}
function safeParseJson(text) {
    try {
        return JSON.parse(text);
    }
    catch (e) {
        return null;
    }
}
function decodeHeader(token) {
    const header = token.split('.', 1)[0];
    if (!header) {
        return null;
    }
    return safeParseJson(Buffer.from(header, "base64").toString("utf-8"));
}
exports.decodeHeader = decodeHeader;
function decodePayload(token) {
    const payload = token.split('.', 2)[1];
    if (!payload) {
        return null;
    }
    return safeParseJson(Buffer.from(payload, "base64").toString("utf-8"));
}
exports.decodePayload = decodePayload;
function resolveTokenByHeader(headers) {
    if (!headers.authorization) {
        throw401Error("Not found Token!");
    }
    const [bearer, token] = headers.authorization.split(" ");
    if (bearer !== "Bearer" || !token) {
        throw401Error("Bad Authorization header format. Format is 'Authorization: Bearer <token>'");
    }
    return token;
}
exports.resolveTokenByHeader = resolveTokenByHeader;
function verifySignature(token, secret) {
    const [header, payload, sign] = (token || "").split(".");
    if (!header || !payload || !sign) {
        return false;
    }
    const text = header + '.' + payload;
    return compare_1.safeStringCompare(hexToJwtBase64(hash_1.HMAC_SHA256(text, secret)), sign);
}
exports.verifySignature = verifySignature;
function verifyIsExpired(token) {
    const payload = decodePayload(token);
    if (payload === null) {
        return true;
    }
    return Math.floor(Date.now() / 1000) >= payload.exp;
}
exports.verifyIsExpired = verifyIsExpired;
function verify(token, secret) {
    if (!verifySignature(token, secret)) {
        return null;
    }
    const payload = decodePayload(token);
    if (payload === null || Math.floor(Date.now() / 1000) >= payload.exp) {
        return null;
    }
    return payload;
}
exports.verify = verify;
