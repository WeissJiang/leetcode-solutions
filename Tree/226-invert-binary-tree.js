/**
 *       4
 *     /    \
 *    2      7
 *   / \    / \
 *  1   3  6   9
 */
var invertTree = function(root) {
    // base cases and the condition to stop recursion
    if(root == null || (root.left == null && root.right == null)){
        return root
    }

    // Call the function recursively for the left subtree...
    invertTree(root.left)
    // Call the function recursively for the right subtree...
    invertTree(root.right)
    // swapping process...
    const curr = root.left
    root.left = root.right
    root.right = curr
    return root  
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

let arr = [4, 2, 7, 1, 3, 6, 9];
let root = createTreeFromArray(arr);

let invertedToor = invertTree(root);