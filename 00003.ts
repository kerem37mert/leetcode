function lengthOfLongestSubstring(s: string): number {
    let letters: string[] = [];
    let maxLen = 0;

    for (let i=0; i<s.length; i++) {
        const index = letters.indexOf(s[i]);
        
        if (index !== -1) {
            maxLen = Math.max(maxLen, letters.length);
            letters = letters.slice(index + 1);
        }
        letters.push(s[i]);
    }
    maxLen = Math.max(maxLen, letters.length);

    return maxLen;
}