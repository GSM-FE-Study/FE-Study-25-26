function solution(s, n) {
    let codes = [...s].map(c => {
        if (c === ' ') return c; 

        const code = c.charCodeAt(0);

        if (code >= 97 && code <= 122) {
            return String.fromCharCode(((code - 97 + n) % 26) + 97);
        }

        if (code >= 65 && code <= 90) {
            return String.fromCharCode(((code - 65 + n) % 26) + 65);
        }

        return c;
    });

    return codes.join("");
}