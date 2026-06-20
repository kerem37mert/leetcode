function countBits(n: number): number[] {
    let result: number[] = [];

    for (let i=0; i<=n; i++) {
        let count = 0;
        let x = i;

        while (x >= 2) {
            if ((x % 2) == 1) count++;
            x = Math.floor(x / 2);
        }

        count += x;

        result.push(count);
    }

    return result;
};
