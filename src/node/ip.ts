import os, { NetworkInterfaceInfo } from "os"

export function ipAddress (type:"IPv4"|"IPv6") {
  const interfaces = os.networkInterfaces() as NodeJS.Dict<NetworkInterfaceInfo[]>;
  const ips = [];
  for ( let interfacesName of Object.keys( interfaces ) ) {
    for ( let networkInterface of (interfaces as any)[ interfacesName ] ) {
      if ( type !== networkInterface.family || networkInterface.internal ) {
        // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
        continue;
      }
      // 可能会有多个 addresses
      ips.push( networkInterface.address )
    }
  }
  return ips;
}
export function ipv4Address (): string[] {
  return ipAddress("IPv4");
}
export function ipv6Address (): string[] {
  return ipAddress("IPv6");
}
