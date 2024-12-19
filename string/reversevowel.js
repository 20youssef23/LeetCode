let reverseVowels = function (s) {
    let char = s.split('');
    let voyel_s = 'aeiouAEIOU';
    let right = s.length - 1
    let left = 0
    while(left<right){
        if(voyel_s.includes(char[left])){
            if(voyel_s.includes(char[right])){
                let temp = char[left]
                char[left] = char[right]
                char[right] = temp; 
                right--;
                left++;
            }else{
                right--;
            }
        }else{
            left++;
        }
    }
    return char.join('');
};
console.log(reverseVowels('IceCreAm'));
