/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */


function guessNumber(n: number): number {
    let min = 1;
    let max = n;

    while (true) {
        let num = Math.floor(min + (max-min)/2);
        let guessRes = guess(num);

        if (guessRes === 0)
            return num;
        
        if (guessRes === -1) {
            max = num - 1;
        } else {
            min = num + 1;
        }
    }
};