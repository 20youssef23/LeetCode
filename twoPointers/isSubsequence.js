let s = "abc"
let t = "ahbfce"
let isSubsequence = function (s, t) {
    if (s.length > t.length) {
        return false
    }
    let subsequence = 0
    for (let i = 0; i < t.length; i++) {
        if (s[subsequence] === t[i]) {
            subsequence++
        }
    }
    return s.length === subsequence
};
console.log(isSubsequence(s,t))
