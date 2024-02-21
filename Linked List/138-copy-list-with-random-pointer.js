var copyRandomList = function(head) {
    if(!head) return head;

    let map = new Map();
    let dummy = head;

    while(dummy){
        map.set(dummy, new Node(dummy.val));
        dummy = dummy.next;
    }

    let dummy2 = head;
    while(dummy2){
        let newNode = map.get(dummy2);
        newNode.next = map.get(dummy2.next) ?? null;;
        newNode.random = map.get(dummy2.random) ?? null;;
        dummy2 = dummy2.next;
    }

    return map.get(head);
};

function Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
};

// generate list nodes
const node1 = new Node(7, null, null);
const node2 = new Node(13, null, null);
const node3 = new Node(11, null, null);
const node4 = new Node(10, null, null);
const node5 = new Node(1, null, null);

//link the next pointers
node1.next = node2;
node2.next = node3;
node2.random = node1;
node3.next = node4;
node3.random = node5;
node4.next = node5;
node4.random = node3;
node5.random = node1;

let result = copyRandomList(node1);
console.log(reuslt);