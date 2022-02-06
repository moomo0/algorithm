/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
    let fast = slow = head
    while(fast){
        fast = fast.next
        k--
        if(k<0){
            slow = slow.next
        }
    }
    return slow
};
/**
 * 使用快慢指针的办法
 * 1.使用fast，slow初始化为head
 * 2.开始遍历fast指针，k--
 * 3.当k<0时开始遍历slow
 * 4.当fast遍历完成时slow为倒数第k个节点
 */
