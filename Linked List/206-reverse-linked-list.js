var reverseList1 = function(head1) {
    if (!head1) return head1;
    let stack = head1;
    let temp = null;
    let reversed = null;

    while(stack){
        temp = stack.next;
        stack.next = reversed;
        reversed = stack;
        stack = temp;
    }

    return reversed;
};

var reverseList2= function(head2) {
    if(!head2.next) return head2;

    let reversed = reverseList2(head2.next);

    head2.next.next = head2;
    head2.next = null;

    return reversed;
};

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

let node6 = new ListNode(6);
let node5 = new ListNode(5, node6);
let node4 = new ListNode(4, node5);
let node3 = new ListNode(3, node4);
let node2 = new ListNode(2, node3);
let head1 = new ListNode(1, node2);

let node11 = new ListNode(6);
let node10 = new ListNode(5, node11);
let node9 = new ListNode(4, node10);
let node8 = new ListNode(3, node9);
let node7 = new ListNode(2, node8);
let head2 = new ListNode(1, node7);

let reversed1 = reverseList1(head);

let reversed2 = reverseList2(head2);

debugger;