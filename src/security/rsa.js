/**
 * @author: hukun
 * @Date: 2019-06-06 17:42
 * @description
 * RSA 算法相关
 */
import NodeRSA from "node-rsa";


/**
 * 代理一些 rsa 的操作
 */
class RsaProxy {
  /**
   * @param {NodeRSA} rsa
   */
  constructor( rsa ) {
    this.rsa = rsa;
  }

  /**
   * 获取公钥
   */
  getPublicDer() {
    return this.rsa.exportKey( "pkcs8-public-pem" );
  }

  /**
   * 获取私钥
   */
  getPrivateDer() {
    return this.rsa.exportKey( "pkcs8-private-pem" );
  }

  /**
   * 加密
   * @param data
   */
  encryptByPublicKey( data ) {
    return this.rsa.encrypt( Buffer.from( data ), "base64", "utf8" );
  }

  /**
   * 加密
   * @param data
   */
  encryptByPrivateKey( data ) {
    return this.rsa.encryptPrivate( Buffer.from( data ), "base64", "utf8" );
  }

  /**
   * 解密
   * @param data
   */
  decryptByPublicKey( data ) {
    return this.rsa.decryptPublic( data, "utf8" );
  }

  /**
   * 解密
   * @param data
   */
  decryptByPrivateKey( data ) {
    return this.rsa.decrypt( data, "utf8" );
  }

  /**
   * 签名
   * @param {string} text
   */
  sing( text ) {
    this.rsa.sign( text, "base64", "utf8" );
  }

  /**
   * 验证签名
   * @param {string} text
   * @param {string} signature
   */
  verify( text, signature ) {
    this.rsa.verify( text, signature, "utf8", "base64" );
  }
}

export const RSA = {
  new( size = 512 ) {
    const rsa = new NodeRSA( { b: size } );
    rsa.setOptions( { encryptionScheme: "pkcs1" } );
    return new RsaProxy( rsa )
  },

  /**
   * 导入公钥
   * @param publicPem
   */
  importPublicKey( publicPem ) {
    const key = new NodeRSA( publicPem, "pkcs8-public-pem" );
    key.setOptions( { encryptionScheme: "pkcs1" } );
    return new RsaProxy( key );
  },

  /**
   * 导入私钥
   * @param privatePem
   */
  importPrivateKey( privatePem ) {
    const key = new NodeRSA( privatePem ,"pkcs8-private-pem");
    key.setOptions( { encryptionScheme: "pkcs1" } );
    return new RsaProxy( key );
  }
};
