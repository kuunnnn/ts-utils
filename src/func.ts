export function fillZero(n: number): string {
  return n < 10 ? `0${n}` : n.toString();
}

export function sleep(num: number): Promise<"ok"> {
  return new Promise((resolve) => {
    setTimeout(() => resolve("ok"), num);
  });
}
