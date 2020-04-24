import * as crypto from "crypto";

export const generateTimeBasedId = () => {
  return `${Number(new Date())}-${crypto.randomBytes(10).toString("hex").substring(0, 4)}`;
};
