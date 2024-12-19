let moveZeroes = function(nums) {
    let left = 0;

    for (let right=0; right<nums.length; right++) {
        if (nums[right] != 0) {
            let tmp = nums[right];
            nums[right] = nums[left];
            nums[left] = tmp;
            left ++;
        }
    }
    return nums
};
let nums = [0,1,0,3,12]
console.log(moveZeroes(nums))
