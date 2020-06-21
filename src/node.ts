export * from "./common"
import os, { NetworkInterfaceInfo } from "os"

export function ipv4Address (): string[] {
  const interfaces = os.networkInterfaces() as NodeJS.Dict<NetworkInterfaceInfo[]>;
  const ips = [];
  for ( let interfacesName of Object.keys( interfaces ) ) {
    for ( let networkInterface of (interfaces as any)[ interfacesName ] ) {
      if ( 'IPv4' !== networkInterface.family || networkInterface.internal ) {
        // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
        continue;
      }
      // 可能会有多个 ipv4 addresses
      ips.push( networkInterface.address )
    }
  }
  return ips;
}
