/**
 * @author: hukun
 * @Date: 2019-06-02 23:16
 * @description
 */

/**
 * 时间恒定的比较函数
 * @param {string} a
 * @param {string} b
 * @return {boolean}
 */
export function compare(a: string, b: string): boolean {
  const bt1 = [...a].map((v) => v.charCodeAt(0));
  const bt2 = [...b].map((v) => v.charCodeAt(0));
  let diff = bt1.length ^ bt2.length;
  for (let i = 0; i < bt1.length && i < bt2.length; i++)
    diff |= bt1[i] ^ bt2[i];
  return diff === 0;
}
