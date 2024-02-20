var mergeTwoLists = function(list1, list2) {
    if(!list1 || !list2) return list1 || list2;

    let tail = new ListNode();
    let result = tail;
    while(list1 && list2){
        if(list1.val < list2.val){
            tail.next = list1;
            list1 = list1.next;
        }else{
            tail.next = list2;
            list2 = list2.next;
        }

        tail = tail.next;
    }

    tail.next = list1 || list2;

    return result.next;
}

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

let node3 = new ListNode(4);
let node2 = new ListNode(2, node3);
let list1 = new ListNode(1, node2);

let node6 = new ListNode(5)
let node5 = new ListNode(4, node6);
let node4 = new ListNode(3, node5);
let list2 = new ListNode(1, node4);

let result = mergeTwoLists(list1, list2);
debugger;