import jwt from "jsonwebtoken";
import { Env } from "../config";
import { redis } from "../redis/redis";
import { v4 } from "uuid";

export interface JwtPayload {
  userId: number;
}

export interface OriginalJwtPayload {
  userId: number;
  iat: number;
  exp: number;
  aud: string;
  jti: string;
}

export class JwtHelper {
  static sign(payload: JwtPayload, seconds: string | number = 60 * 60) {
    // exp: Math.floor( Date.now() / 1000 ) + seconds
    return jwt.sign(payload, Env.jwt_secret, {
      expiresIn: seconds,
      jwtid: v4(),
      audience: "bookkeeping",
    });
  }

  static token(payload: JwtPayload) {
    return JwtHelper.sign(payload, "1d");
  }

  static refreshToken(payload: JwtPayload) {
    return JwtHelper.sign(payload, "7d");
  }

  static async verify(token: string): Promise<JwtPayload> {
    return new Promise((resolve, reject) => {
      jwt.verify(token, Env.jwt_secret, (err, decoded) => {
        if (err !== null && err !== undefined) {
          reject(err);
        } else {
          resolve(decoded as JwtPayload);
        }
      });
    });
  }

  // 不会验证签名有效性
  static decode(token: string): JwtPayload {
    const decoded = jwt.decode(token, { complete: true });
    return decoded as JwtPayload;
  }

  static async revokeToken(token: string): Promise<boolean> {
    const decode = (await JwtHelper.decode(token)) as OriginalJwtPayload;
    const sec = decode.exp - decode.iat;
    // token 如果已经过期就不要管了
    if (sec < 0) {
      if (Env.__DEV__) {
        console.log("token 已经过期: %s", token);
      }
      return true;
    }
    // 只有拥有 jti 和 aud 两个字段才能被吊销
    if (!decode.jti || !decode.aud) {
      return false;
    }
    await redis.setex(`revoked-token:${decode.aud}-${decode.jti}`, sec, token);
    return true;
  }

  static async isRevoked(decode: OriginalJwtPayload) {
    if (!decode.jti || !decode.aud) {
      return false;
    }
    const token = await redis.get(`revoked-token:${decode.aud}-${decode.jti}`);
    return token === null;
  }
}
