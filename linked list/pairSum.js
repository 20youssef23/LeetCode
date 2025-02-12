var pairSum = function(head) {
    var st = []; 
    while(head != null){
        st.push(head.val);
        head = head.next;
    }
    let max = 0;
    for(let i=0; i<st.length; i++){
        max = Math.max(max, (st[i] + st[st.length-1-i]));
    }
    return max;
};