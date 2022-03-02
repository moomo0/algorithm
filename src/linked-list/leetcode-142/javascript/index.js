/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let fast = slow = head
    while(fast && fast.next){
        fast = fast.next.next
        slow = slow.next
        if(fast===slow){
            let slow2 = head
            while(slow2!==slow){
                slow2 = slow2.next
                slow = slow.next
            }
            return slow2
        }
    }
    return null
};
/**
 * 使用快慢指针
 * 1.fast与slow同时指向head
 * 2.开始遍历，快指针走两步，慢指针走一步
 * 3.找到left前一个节点，遍历到left-1
 * 4.slow与fast相等时，slow2赋值为head
 * 5.开始遍历slow2与slow不等则同时走
 * 6.当slow与slow2相等时，则为相交点
 */
