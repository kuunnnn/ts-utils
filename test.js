async function main() {
  const os = await import("os")
  const interfaces = os.networkInterfaces();
  const ips = [];
  for ( let interfacesName of Object.keys( interfaces ) ) {
    for ( let networkInterface of interfaces[ interfacesName ] ) {
      if ( 'IPv4' !== networkInterface.family || networkInterface.internal !== false ) {
        // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
        continue;
      }
      // 可能会有多个 ipv4 addresses
      ips.push( networkInterface.address )
    }
  }
  return ips;
}

main()
