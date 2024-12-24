let findMaxAverage = function (nums, k) {
    if (nums.length === 1) return nums[0]
    let avg = - Infinity
    let j = 0
    let count = 0
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        count++;
        if (count === k) {
            avg = Math.max(avg, sum / k);
            sum -= nums[j];
            j++
            count--;
        }
    }
    return avg;
}
let nums = [1,12,-5,-6,50,3]
let k = 4
console.log(findMaxAverage(nums,k))