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

let arr = [3,9,20,null,null,15,7];
let root = createTreeFromArray(arr);


var isBalanced = function(root) {
    if (root == null)  return true;
    if (Height(root) == -1)  return false;
	return true;
};

var Height = function(root) {
	if (root == null)  return 0;
    
	let leftHeight = Height(root.left);
	let rightHight = Height(root.right);
    
	if (leftHeight == -1 || rightHight == -1)  return -1;
    if (Math.abs(leftHeight - rightHight) > 1)  return -1;
    
	return Math.max(leftHeight, rightHight) + 1;
};