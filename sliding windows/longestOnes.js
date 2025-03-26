let longestOnes = function(nums, k) {
    let left = 0, right = 0;
    
    while(right < nums.length) {
        if(nums[right] === 0) k--;
        if(k < 0) {
            if(nums[left] === 0) k++;
            left++;
        }
        right++;
    }
    return right-left;
};
let nums = [1,1,1,0,0,0,1,1,1,1,0]
let k =2
console.log(longestOnes(nums,k))