/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    // If the input list is empty then return null
    if (head === null) return null;

    // Initialize a current node we can use to 
    // traverse the linked list so we can still
    // return the head node 
    let curr = head;

    // Iterate through the list until the next 
    // node is null, meaning we've reached the 
    // end of our input list
    while (curr.next !== null) {

        // If the value of the current node equals the value
        // of the next node:
        if (curr.val === curr.next.val) {
            curr.next = curr.next.next;
        }    
        
        // The two values are not duplicates, so set curr
        // to the next node and repeat the loop
        else {
            curr = curr.next; 
        }
    }
    return head;
};

/*

Explanation: This is similar to problem "26. Remove Duplicates
from a Sorted Array" and may be helpful to start with that
challenge first—but the idea is the same: we need to iterate over
the list only once because it is sorted. Starting with the head node
as the current node, we compare the current node's value property 
(curr.val) with the next node's value property (curr.next.val), and 
if we have a match we simply point the current node's next property to
the node that is one beyond curr.next. This leaves the 
duplicate node as an orphan node and it is effectively 'removed' from
our sorted list. When we find and orphan a duplicate, we do NOT want to 
move our current node to the next node. First, we compare the current 
node againto the new next node. Only when the values are different,
 do we move our current node to the next node in the list. 
 When we return the head node, now all duplicates have been
 removed (orphaned) and we are left with a sorted linked list 
 and no duplicate nodes.

*/