/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
let slow = fast = head
    while(fast&&fast.next){
        fast = fast.next.next
        slow=slow.next
    }
    return slow
};
/**
 * 使用快慢指针的办法
 * 1.将show和fast赋值为head
 * 2.开始遍历指针
 * 3.fast每次走两步，slow走一步
 * 4.slow为中间节点
 */
