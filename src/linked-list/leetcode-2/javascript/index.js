/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let head = tail = null
    let carry = 0
    while(l1||l2){
        let a = l1?l1.val:0
        let b = l2?l2.val:0
        let sum = a + b +carry
        if(!head){
            head = tail = new ListNode(sum%10)
        }else{
            tail.next = new ListNode(sum%10)
            tail = tail.next
        }
        if(l1){
            l1 = l1.next
        }
        if(l2){
            l2 = l2.next
        }
        carry = ~~(sum/10)
    }
    if(carry){
        tail.next = new ListNode(carry)
    }
    return head
};
/**
 * 使用双指针的办法
 * 1.初始化一个进位变量carry
 * 2.首先先遍历l1和l2，有一个不为空则继续遍历
 * 3.获取当前节点的值，为空则设为0
 * 4.求当前节点的合
 * 5.第一次创建节点，设置值为和取余
 * 6.之后每次将计算后的值添加到next上
 * 7.遍历tail，l1，l2
 * 8.每次遍历计算进位值carry
 * 9.遍历结束，如果进位值carry不为0，则添加到next上
 * 10.最后返回加后的链表head
 */
