let findDifference = function (nums1, nums2) {
    const h1 = new Set(nums1)
    const h2 = new Set(nums2)

    for (let num of nums1) {
        if (h2.has(num)) {
            h1.delete(num)
            h2.delete(num)
        }
    }
    return [Array.from(h1), Array.from(h2)]

};
