function rotateString(s: string, goal: string): boolean {
    let sArr = s.split("");

    for (let i=0; i<sArr.length; i++) {
        if (sArr.join("") === goal) return true;

        let temp = sArr[0];
        for (let j=0; j<sArr.length; j++) {
            if (j === sArr.length-1) {
                sArr[j] = temp;
            } else {
                sArr[j] = sArr[j+1];
            }
        }
    }

    return false;
};