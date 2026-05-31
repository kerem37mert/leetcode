/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let carry = 0;
    let head: ListNode | null = null;

    const getLastElement = (list: ListNode) : ListNode => {
        while(list.next) {
            list = list.next;
        }
        return list;
    };

    while (l1 || l2) {
        let sum = carry;

        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }

        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }

        carry = Math.floor(sum / 10);
        sum %= 10;

        let node = new ListNode(sum, null);

        if (!head) {
            head = node;
        } else {
            getLastElement(head).next = node;
        }
    }

    if (carry) {
        getLastElement(head).next = new ListNode(carry, null);
    }

    return head;
};