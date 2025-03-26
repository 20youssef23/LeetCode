function maxVowels(s, k) {
    let ans = 0;
    let count = 0;

    for (let i = 0; i < k; i++) {
        if (isVowel(s[i])) {
            count++;
        }
    }
    ans = Math.max(ans, count);

    for (let i = k; i < s.length; i++) {
        if (isVowel(s[i])) {
            count++;
        }
        if (isVowel(s[i - k])) {
            count--;
        }
        ans = Math.max(ans, count);
    }

    return ans;
}

function isVowel(c) {
    return c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u';
}
let s = "abciiidef"
let k = 3
console.log(maxVowels(s,k))