function fib(n: number): number {
    if (n === 1) return 1;
    if (n < 1) return 0;

    return fib(n-1) + fib(n-2);
};