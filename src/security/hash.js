/**
 * @author: hukun
 * @Date: 2019-06-06 17:42
 * @description
 * hash 算法相关
 */
import bcryptjs from "bcryptjs";
import hash from "hash.js";

export class Hash {
  /**
   * 生成一个salt
   * @param saltRounds
   */
  static bCryptSalt( saltRounds = 10 ) {
    return bcryptjs.genSalt( saltRounds );
  }

  /**
   * 自动生成盐并返回hash
   * @param data
   * @param saltRounds
   */
  static bCryptHash( data, saltRounds = 10 ) {
    return bcryptjs.hash( data, saltRounds );
  }

  /**
   * 比较两个hash
   * 使用的是恒定时间算法
   * @param cipher1
   * @param cipher2
   * @return {boolean}
   */
  static compareBCrypt( cipher1, cipher2 ) {
    return bcryptjs.compare( cipher1, cipher2 );
  }

  /**
   *
   * @param {string} text
   * @return {Buffer | string | PromiseLike<ArrayBuffer>}
   */
  static hmac_sha256( text ) {
    return hash.sha256().update( text ).digest( 'hex' )
  }
}
