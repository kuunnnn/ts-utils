import os from 'os';
/**
 * @function 获取本地 ip 地址 IPv4 or IPv6
 * @desc 跨平台情况未知
 * @param type {"IPv4" | "IPv6"}
 * @return {string[]}
 */
export function ipAddress(type) {
    const interfaces = os.networkInterfaces();
    const ips = [];
    for (const interfacesName of Object.keys(interfaces)) {
        for (const networkInterface of interfaces[interfacesName]) {
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
/**
 * @function 获取本地 IPv4 地址
 * @desc 跨平台情况未知
 * @return {string[]}
 */
export function ipv4Address() {
    return ipAddress('IPv4');
}
/**
 * @function 获取本地 IPv6 地址
 * @desc 跨平台情况未知
 * @return {string[]}
 */
export function ipv6Address() {
    return ipAddress('IPv6');
}
//# sourceMappingURL=ip.js.map