const mergeNodes = (node1, node2) => {
    if (!node1 || !node2) {
        return;
    }

    let currNode = node2;
    while (currNode.left !== null) {
        currNode = currNode.left;
    }
    currNode.left = node1;
}

var deleteNode = function (root, key) {
    if (!root) {
        return root;
    } else if(root.val === key){
        const leftNode = root.left;
        const rightNode = root.right;
        root = null;
        mergeNodes(leftNode, rightNode);

        return rightNode || leftNode;
    }

    const queue = [root];

    while (queue.length > 0) {
        const node = queue.shift();

        if (node.left?.val === key) {
            const leftNode = node.left.left;
            const rightNode = node.left.right;
            node.left = null;
            
            mergeNodes(leftNode, rightNode);
            node.left = rightNode || leftNode;
            break;
        }

        if (node.right?.val === key) {
            const leftNode = node.right.left;
            const rightNode = node.right.right;
            node.right = null;

            mergeNodes(leftNode, rightNode)
            node.right = rightNode || leftNode;
            break;
        }

        if (node.left) {
            queue.push(node.left);
        }
        if (node.right) {
            queue.push(node.right);
        }
    }

    return root;
};