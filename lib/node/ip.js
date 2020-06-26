"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ipv6Address = exports.ipv4Address = exports.ipAddress = void 0;
const os_1 = __importDefault(require("os"));
function ipAddress(type) {
    const interfaces = os_1.default.networkInterfaces();
    const ips = [];
    for (let interfacesName of Object.keys(interfaces)) {
        for (let networkInterface of interfaces[interfacesName]) {
            if (type !== networkInterface.family || networkInterface.internal) {
                // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
                continue;
            }
            // 可能会有多个 addresses
            ips.push(networkInterface.address);
        }
    }
    return ips;
}
exports.ipAddress = ipAddress;
function ipv4Address() {
    return ipAddress("IPv4");
}
exports.ipv4Address = ipv4Address;
function ipv6Address() {
    return ipAddress("IPv6");
}
exports.ipv6Address = ipv6Address;
