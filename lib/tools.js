"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sleep = exports.fillZero = void 0;
function fillZero(n) {
    return n < 10 ? `0${n}` : n.toString();
}
exports.fillZero = fillZero;
function sleep(num) {
    return new Promise((resolve) => {
        setTimeout(() => resolve("ok"), num);
    });
}
exports.sleep = sleep;
