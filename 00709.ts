function toLowerCase(s: string): string {
    let lower = "";

    for (let i=0; i<s.length; i++) {
        const code = s.charCodeAt(i);

        if (code >= 65 && code <= 90) {
            lower += String.fromCharCode(code + 32);
        } else {
            lower += s[i];
        }
    }

    return lower;
};