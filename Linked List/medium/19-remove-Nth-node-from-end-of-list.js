var removeNthFromEnd = function(head, n) {
    if (!head || n == 0) return head;
    
    let fast = head;
    let slow = head;
    while(n--) fast = fast.next;

    if(!fast) return head.next;

    while(fast.next) {
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next;
    return head;
};

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

let node5 = new ListNode(5);
let node4 = new ListNode(4, node5);
let node3 = new ListNode(3, node4);
let node2 = new ListNode(2, node3);
let head1 = new ListNode(1, node2);

let result = removeNthFromEnd(head1, 2);

debugger;

/**
 * good to know
 */
let arr = ["a", "b", "c"];
let i = arr.length;
while(i--) console.log(i);