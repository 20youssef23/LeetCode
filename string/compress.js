let compress = function(chars) {
    let s = [];
    let count = 1;
    let previous_char = chars[0];
    s.push(previous_char);

    for (let i = 1; i < chars.length; i++) {
        if (chars[i] === previous_char) {
            count++;
        } else {
            if (count > 1) {
                s.push(count.toString());
            }
            s.push(chars[i]);
            previous_char = chars[i];
            count = 1;
        }
    }

    if (count > 1) {
        s.push(count.toString());
    }

    return s;
};

let chars = ["a", "a", "b", "b", "c", "c", "c"];
console.log(compress(chars));
