var reorderList = function(head) {
    if(!head || !head.next) return head;

    let lastOfFirstHalf = head;
    let doubleMove = head;
    while(doubleMove.next && doubleMove.next.next){
        lastOfFirstHalf = lastOfFirstHalf.next;
        doubleMove = doubleMove.next.next;
    }

    /**
     * so far, we've found the first half 
     */

    let temp = null;
    let secondHalf = lastOfFirstHalf.next;
    let reverseSecondHalf = null;

    while(secondHalf){
        temp = secondHalf.next;
        secondHalf.next = reverseSecondHalf;
        reverseSecondHalf = secondHalf;
        secondHalf = temp;
    }

    /**
     * so far, we've got the reversed second half: Ln -> Ln-1 -> Ln-2 -> ... -> L(n+1)/2
     * temp is null again;
     */

    lastOfFirstHalf.next = null; 
    
    /**
     * cut off the second from the last node of the first half
     */

    let firstHalf = head;
    let second = reverseSecondHalf;
    while(second){
        temp = firstHalf.next;
        firstHalf.next = second;
        firstHalf = second;
        second = temp;
    }

    /** 
     * List is a special object, it is NOT an array, this kind of pointing is nested, not levelled
     * Note that such references are interactive
     * we don't even need to return head;
    */
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
let node1 = new ListNode(1, node2);

reorderList(node1);

debugger;