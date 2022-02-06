/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {
    let head = tail = new ListNode()
    while(l1&&l2){
        let a = l1.val
        let b = l2.val
        if(a<=b){
            tail.next = l1
            l1 = l1.next
        }else{
            tail.next = l2
            l2 = l2.next
        }
        tail = tail.next
    }
    tail.next = l1?l1:l2
    return head.next
};
/**
 * 使用设置前置节点的办法
 * 1.新建一个前置节点
 * 2.遍历l1与l2，小的进入tail链表
 * 3.最后没有遍历完成的部分接在tail链表后就可以了
 * 4.返回head.next
 */
