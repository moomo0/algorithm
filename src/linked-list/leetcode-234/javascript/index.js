/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(!head)return true
    let mid = middleNode(head)
    let revList = reverseList(mid.next)
    while(revList){
        if(head.val!==revList.val)return false
        head = head.next
        revList = revList.next
    }
    return true
};

var middleNode = function(head) {
    let slow = fast = head
    while (fast.next && fast.next.next) {
        fast = fast.next.next
        slow = slow.next
    }
    return slow
};
/**
 * 使用快慢指针的办法
 * 获取中间节点，与leetcode-876区别是当节点个数为偶数时，指向前一个节点
 */
 var reverseList = function(head) {
    let prev = null
    let curr = head
    while(curr){
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    return prev
};

/**
 * 使用快慢指针的办法
 * 1.使用反转链表与链表的中间结点相结合的方法
 * 2.先获取中心节点
 * 3.将链表后半部分反转
 * 4.开始遍历两条链表，一一比较，不同则返回false
 * 5.全部相等则返回true
 */
