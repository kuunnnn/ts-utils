/**
 * @author: hukun
 * @Date: 2019-06-06 17:42
 * @description
 * hash 算法相关
 */
import bcryptjs from "bcryptjs";

export class Hash {
  /**
   * 生成一个salt
   * @param {number} saltRounds
   * @return {string}
   */
  static genSalt(saltRounds: number = 10): Promise<string> {
    return bcryptjs.genSalt(saltRounds);
  }

  /**
   * 自动生成盐并返回hash
   * @param {string} data
   * @param {string|number} saltRounds
   * @return {string}
   */
  static genHash(
    data: string,
    saltRounds: number | string = 10
  ): Promise<string> {
    return bcryptjs.hash(data, saltRounds);
  }

  /**
   * 比较两个hash
   * 使用的是恒定时间算法
   * @param {string} cipher1
   * @param {string} cipher2
   * @return {Boolean}
   */
  static compare(cipher1: string, cipher2: string): Promise<boolean> {
    return bcryptjs.compare(cipher1, cipher2);
  }
}
