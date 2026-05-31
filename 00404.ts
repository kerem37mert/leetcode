/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function sumOfLeftLeaves(root: TreeNode | null): number {
    if (!root) return 0;
    
    let left = root.left;
    let right = root.right;

    let value = (root.left && !root.left.left && !root.left.right) ? root.left.val : 0;

    return value + sumOfLeftLeaves(left) + sumOfLeftLeaves(right);
};