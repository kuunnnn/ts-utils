/**
 * 抛出带有 status 的错误,改错误会被 koa 框架捕捉,并且得到指定的状态码
 * 因为在这里是不知道是在 koa router 中 还是 graphql 中,所以这里抛出错误时 koa 的,
 * 如果是 graphql 的话需要自己在 resolves 中包裹一层 try catch 判断
 * @param message
 * @param status
 * TODO: 添加 type 字段, error code 等 用于细分错误类型
 */
export function throwHttpError(message, status) {
    const error = new Error(message);
    error.name = "HttpError";
    error.status = status;
    throw error;
}
