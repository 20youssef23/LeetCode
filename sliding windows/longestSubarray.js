let longestSubarray = function (nums) {
    let k = 1;
    let left = 0
    let maxlength = 0
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) {
            k -= 1
        }
        while (k < 0) {
            if (nums[left] === 0) {
                k += 1
            }
            left++;
        }
        maxlength = Math.max(maxlength, right - left)
    }
    return maxlength
};
let nums = [1, 1, 0, 1]