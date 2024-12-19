let maxArea = function (height) {
    let Max = Math.min(height[0], height[height.length-1]) * (height.length-1)
    for (let left = 0; left < height.length; left++) {
        for (let right = height.length-1; right > left; right--) {
            let current_area = Math.min(height[left], height[right]) * (right - left)
            Max = Math.max(Max,current_area);
        }
    }
    return Max
}
let height = [4,3,2,1,4]
console.log("la surface maximale est "+maxArea(height))