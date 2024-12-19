let maxOperations = function (nums, k) {
    let occ = 0
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if (nums[i] + nums[j] === k) {
                occ++;
                nums.splice(j,1);
                nums.splice(i,1);
                i--;
                break;
            }
        }
    }
    return occ
}
let nums = [3,1,3,4,3]
let k =5
console.log(maxOperations(nums,k))