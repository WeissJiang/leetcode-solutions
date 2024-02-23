var diameterOfBinaryTree = function(root) {
    let diameter = 0;
    
    function maxDepth(node) {
        if (node == null) return 0;
        
        const left = maxDepth(node.left);
        const right = maxDepth(node.right);
        
        diameter = Math.max(diameter, left + right);
        return Math.max(left, right) + 1;
    }

    maxDepth(root);

    return diameter;
};

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

// create tree with arr input
function createTreeFromArray(arr) {
    if (!arr.length) return null;

    // DFS: deep-first search
    function dfs(level) {
        if (level >= arr.length || arr[level] === null) return null;

        // create current root
        let node = new TreeNode(arr[level]);

        // create left and right recursively
        node.left = dfs(2 * level + 1);
        node.right = dfs(2 * level + 2);

        return node;
    }

    // create tree from root node
    return dfs(0);
}

let arr1 = [1, 2, 3, 4, 5];
let root1 = createTreeFromArray(arr1);

let arr2 = [1, 2, 3, 4, 5, null, null, 6, 7];
let root2 = createTreeFromArray(arr2);