import Is from "@sindresorhus/is";
import { compare } from "./compare";
import { Security } from "./security";
import svgCaptcha from "svg-captcha";

export const Utils = {
  compare,
  security: Security,
  is: Is,
  createCaptcha() {
    return svgCaptcha.create();
  },
};
