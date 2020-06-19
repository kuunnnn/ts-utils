export function fillZero(n) {
    return n < 10 ? `0${n}` : n.toString();
}
export function sleep(num) {
    return new Promise((resolve) => {
        setTimeout(() => resolve("ok"), num);
    });
}
