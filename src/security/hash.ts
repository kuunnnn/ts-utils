import bcryptjs from "bcryptjs";
import forge from "node-forge";

export function genBCryptSalt(saltRounds = 10): string {
  return bcryptjs.genSaltSync(saltRounds);
}

export function b_crypt_hash(
  data: string,
  saltRounds: number | string = 10
): string {
  return bcryptjs.hashSync(data, saltRounds);
}

export function HMAC_SHA256(text: string): string {
  const hmac = forge.hmac.create();
  hmac.start("sha256", text);
  return hmac.digest().toHex();
}

export function SHA256(text: string): string {
  const md = forge.md.sha256.create();
  return md.update(text).digest().toHex();
}
