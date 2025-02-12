let removeStars = function (s){
    let stack =[]
    for(const c of s){
        if(c==='*' && stack.length){
            stack.pop()
        }else{
            stack.push(c)
        }
    }
    return stack.join('')
}