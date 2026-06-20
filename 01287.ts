function findSpecialInteger(arr: number[]): number {
    for (let i=0; i<arr.length-1; i++) {
        let count = 1;
        for (let j=i+1; j<arr.length; j++) {
            if (arr[j] === arr[i]) {
                count++;
            }
        }

        if ((count / arr.length) > 0.25) return arr[i];
    }

    return arr[0];
};
