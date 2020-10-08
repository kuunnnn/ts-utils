/**
 * @function 将base64链接转换为文件
 * @param dataUrl {string} Data URLs 字符串
 * @param filename {string} 文件名
 * @example dataURLtoFile("data:text/plain;base64,SGVsbG8sIF", "test")
 * @return {File}
 */
export declare function dataURLtoFile(dataUrl: string, filename: string): File;
/**
 * @function 将base64链接转换为 Blob 对象
 * @param base64Data {string} Data URLs 字符串
 * @example dataURItoBlob("data:text/plain;base64,SGVsbG8sIF")
 * @return {Blob}
 */
export declare function dataURItoBlob(base64Data: string): Blob;
