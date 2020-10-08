import qs from 'query-string';
/**
 * @function 获取 url 上的参数
 * @param url
 * @return {qs.ParsedQuery}
 */
export declare function getParams(url: string): qs.ParsedQuery;
/**
 * @function 数字的前置 0 填充
 * @deprecated 直接使用 string.padStart 更好些
 * @param n {number}
 * @return string
 */
export declare function padZero(n: number): string;
/**
 * @function 等待
 * @param num {number} 毫秒
 * @return {void}
 */
export declare function sleep(num?: number): Promise<void>;
/**
 * @function 获取数据的类型
 * @param target {*}
 * @return string
 */
export declare function typeOf(target: unknown): string;
/**
 * @function 是否是闰年
 * @param year {number}
 * @return {boolean}
 */
export declare function isLeapYear(year: number): boolean;
/**
 * @function 一年的第几周
 * @param date TODO: 增加多种类型输入参数
 * @return {number} 1-7
 */
export declare function getWeekNumber(date?: Date): 1 | 2 | 3 | 4 | 5 | 6 | 7;
/**
 * @function 获取一个月有多少天
 * @param param TODO: 增加多种类型输入参数
 * @return {number} 28 29 30 31
 */
export declare function getMonthAllDate(param: Date | string): 28 | 29 | 30 | 31;
/**
 * @function 获取一周的起始日期
 * @param date
 * @return {[Date, Date]}
 */
export declare function getWeekDate(date?: Date): [Date, Date];
/**
 * @function 文件大小换算
 * @param size {number} 字节
 * @param digits {number} 几位小数点 默认2
 * @return string
 */
export declare function fileSize(size: number, digits?: number): string;
