/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!head||!head.next)return false
    let slow = fast = head
    while(fast.next&&fast.next.next){
        fast = fast.next.next
        slow = slow.next
        if(slow===fast){
            return true
        }
    }
    return false
};
/**
 * 使用快慢指针的办法
 * 1.将show和fast赋值为head
 * 2.开始遍历指针
 * 3.fast每次走两步，slow走一步
 * 4.当slow与fast相等时，说明存在环
 * 5.如果fast跳出循环，则说明不存在环
 */


/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let hash = new Set()
    while(head){
        if(hash.has(head))return true
        hash.add(head)
        head = head.next
    }
    return false
};

/**
 * 使用hash
 * 1.初始化一个Set存储遍历过的节点
 * 2.遍历head，看hash中是否存在当前节点，存在则说明有环
 * 3.不存在则，将当前节点存入hash，继续遍历
 * 4.如果跳出循环，则说明不存在环
 */