function reverse(x: number): number {
    let result = 0;

    while (x) {
        result = (result * 10) + (x % 10);
        x = Math.trunc(x / 10);
    }

    if (result < -(2 ** 31) || result > (2 ** 31) - 1) {
        return 0;
    }

    return result;
};