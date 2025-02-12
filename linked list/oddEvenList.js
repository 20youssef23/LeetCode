function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function arrayToList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummy.next;
}

function listToArray(head) {
    let result = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}

var oddEvenList = function(head) {
    if (head === null || head.next === null) return head;
    
    let odd = new ListNode(0);
    let odd_ptr = odd;
    let even = new ListNode(0);
    let even_ptr = even;
    let idx = 1;

    while (head !== null) {
        if (idx % 2 === 0) {
            even_ptr.next = head;
            even_ptr = even_ptr.next;
        } else {
            odd_ptr.next = head;
            odd_ptr = odd_ptr.next;
        }
        head = head.next;
        idx++;
    }

    even_ptr.next = null;
    odd_ptr.next = even.next;
    
    return odd.next;
};

let head = arrayToList([1, 2, 3, 4, 5]);
head = oddEvenList(head);
console.log(listToArray(head)); 
