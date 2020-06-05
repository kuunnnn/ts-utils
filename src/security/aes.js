/**
 * @author: hukun
 * @Date: 2019-06-06 17:42
 * @description
 * aes 算法相关
 */
import aesjs from "aes-js";
import randombytes from "randombytes";

class Cbc {
  static createKey(size = 32) {
    return randombytes(size);
  }

  static createIv() {
    return randombytes(16);
  }

  static fill(text, len = 16, val = 0) {
    let textBytes = Buffer.from(text);
    if (textBytes.length % len !== 0) {
      const remainder = textBytes.length % len;
      textBytes = Buffer.concat([
        textBytes,
        Buffer.allocUnsafe(len - remainder).fill(val)
      ]);
    }
    return textBytes;
  }

  static encrypt(text, key, iv) {
    // 将文本转换为字节（文本必须是16个字节的倍数）
    const textBytes = aesjs.utils.utf8.toBytes(Cbc.fill(text).toString());
    const aesCbc = new aesjs.ModeOfOperation.cbc(key, iv);
    const encryptedBytes = aesCbc.encrypt(textBytes);
    // 要打印或存储二进制数据，您可以将其转换为十六进制
    return aesjs.utils.hex.fromBytes(encryptedBytes);
  }

  static decrypt(encryptedHex, key, iv) {
    // 准备解密十六进制字符串时，将其转换回字节
    const encryptedBytes = aesjs.utils.hex.toBytes(encryptedHex);
    //  密码块链接操作模式保持内部state，所以解密新实例必须实例化。
    const aesCbc = new aesjs.ModeOfOperation.cbc(key, iv);
    const decryptedBytes = aesCbc.decrypt(encryptedBytes);
    //  将我们的字节转换回文本
    return aesjs.utils.utf8.fromBytes(decryptedBytes);
  }
}

class Ctr {
  static encrypt(text, key, iv = 5) {
    //  “文本可以是您想要的任何长度，不需要填充。”
    const textBytes = aesjs.utils.utf8.toBytes(text);
    const keyBytes = aesjs.utils.hex.toBytes(key);
    // 计数器是可选的，如果省略，则从1开始
    const aesCtr = new aesjs.ModeOfOperation.ctr(
      keyBytes,
      new aesjs.Counter(iv)
    );
    const encryptedBytes = aesCtr.encrypt(textBytes);
    // 要打印或存储二进制数据，您可以将其转换为十六进制
    return aesjs.utils.hex.fromBytes(encryptedBytes);
  }

  static decrypt(encryptedHex, key, iv = 5) {
    // 准备解密十六进制字符串时，将其转换回字节
    const encryptedBytes = aesjs.utils.hex.toBytes(encryptedHex);
    const keyBytes = aesjs.utils.hex.toBytes(key);
    //  密码块链接操作模式保持内部state，所以解密新实例必须实例化。
    const aesCtr = new aesjs.ModeOfOperation.ctr(
      keyBytes,
      new aesjs.Counter(iv)
    );
    const decryptedBytes = aesCtr.decrypt(encryptedBytes);
    //  将我们的字节转换回文本
    return aesjs.utils.utf8.fromBytes(decryptedBytes);
  }
}

export class AES {
  static cbc = Cbc;
  static ctr = Ctr;
}
