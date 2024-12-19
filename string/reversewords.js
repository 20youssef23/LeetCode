let reverseWords = function (s) {
    let char = s.split(' ').filter((s) => s != "");
    let right = char.length - 1
    let left = 0
    while (left < right) {
        
        let temp = char[left]
        char[left] = char[right]
        char[right] = temp;
        right--;
        left++;

    };
    return char.join(' ');
}
console.log(reverseWords("  Bob    Loves  Alice   "));
 