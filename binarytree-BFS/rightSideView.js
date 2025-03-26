var rightSideView = function (root) 
{

    if (!root) return [];
    let result = [];
    let queue = [];
    queue.push(root)
    while (queue.length) {
        let values = []
        let n = queue.length;
        for (let i = 0; i < n; i++) {
            let node = queue.shift();
            if (root) {
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
                values.push(node.val);
            }
        }
        console.log(values)
        result.push(values.pop());

    }
    return result;
};