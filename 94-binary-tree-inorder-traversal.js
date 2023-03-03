/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    // Initialize empty array to push each node.val to 
    // after it has been traversed
    let answer = [] 

    // Create recursive function to call on the root node
    // that will traverse each node recursively, starting
    // from the farthest leftmost child of the left subtree
    const pushNode = (node) => {
        if (node === null) return;
        pushNode(node.left); // Recursive call down the left subtree
        answer.push(node.val); // After left subtree is traversed, push node's val
        pushNode(node.right); // Recursive call to right subtree
    }
    pushNode(root);
    return answer;
};

/*

    ===========
    Explanation
    ===========
    
    For inorder traversal, we visit every node starting with the 
    leftmost child, otherwise known as the minimum value in the 
    tree. We continue upward, starting from the left child, to its 
    parent, then to the right child, all the way up to the root
    continuing this pattern (left child, parent, right child...).
    We visit the root (note: all the nodes are in order, hence the 
    name inorder traversal; for postorder and preorder, we visit 
    the root in a different order than inorder traversal). After 
    we have visited the entire left subtree and the root, we traverse
    the right subtree starting with the right subtree's leftmost 
    child, its parent, its right child, and so on until we have
    reached the highest value node in the tree. 

    In short, our algorithm will be:
       1. Traverse left subtree first
       2. Traverse root node
       3. Traverse right subtree

 */