var maxLevelSum = function (root) {
    let ans = 1;
    if (!root) return ans;

    let qu = [root];
    let maxSum = root.val;
    let height = 1;
    while (qu.length) {
        const n = qu.length;
        let sum = 0;
        for (let i = 0; i < n; i++) {
            const node = qu.shift();
            sum += node.val;
            if (node.left) qu.push(node.left);
            if (node.right) qu.push(node.right);
        }
        if(sum > maxSum){
            maxSum = sum;
            ans = height;
        }

        height++;
    }
    return ans;
};