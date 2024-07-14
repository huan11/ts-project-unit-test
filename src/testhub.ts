
export function add(a: number, b: number): number {
    return a + b;
}


export function checkSign(num: number): string {
    if (num > 0) {
        return 'The number is positive.';
    } else if (num < 0) {
        return 'The number is negative.';
    } else {
        return 'The number is zero.';
    }
}
