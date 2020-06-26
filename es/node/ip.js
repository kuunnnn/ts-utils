import os from "os";
export function ipAddress(type) {
    const interfaces = os.networkInterfaces();
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
export function ipv4Address() {
    return ipAddress("IPv4");
}
export function ipv6Address() {
    return ipAddress("IPv6");
}
