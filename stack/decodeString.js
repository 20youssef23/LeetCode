let decodeString = function (s) {
    let stack = [];
    for (const char of s) {
        if (char !== ']') {
            stack.push(char);
            continue;
        }
        
        let str = '';
        while (stack.length && stack[stack.length - 1] !== '[') {
            str = stack.pop() + str; 
        }
        stack.pop(); 
        let num = '';
        while (stack.length && !isNaN(Number(stack[stack.length - 1]))) {
            num = stack.pop() + num; 
        }
        
        stack.push(str.repeat(Number(num)));
    }
    return stack.join('');
};

console.log(decodeString("3[a]2[bc]")); 
