/**
 * @author: hukun
 * @Date: 2019-06-06 17:42
 * @description
 * dh 算法相关
 */
import * as crypto from "crypto";

export class DH {
  private dh: crypto.DiffieHellman;

  constructor(primeLength = 1024, generator = 5) {
    this.dh = crypto.createDiffieHellman(primeLength, generator);
  }

  getKey() {
    return this.dh.generateKeys();
  }

  getSecret(clientPubKey: string) {
    return this.dh.computeSecret(clientPubKey, "base64");
  }
}
