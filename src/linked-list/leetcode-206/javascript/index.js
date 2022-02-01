/**
 * @param {ListNode} head
 * @return {ListNode}
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
 * 使用设置前置节点的办法
 * 1.初始化前置节点为null
 * 2.设置当前节点为head
 * 3.开始遍历当前节点直到为空
 * 4.先将当前节点的下一个节点存下来
 * 5.将下一个节点指向前一个节点prev，进行了反转
 * 6.然后进行移动，前置节点prev变为当前节点curr
 * 7.当前节点变为下一节点next
 * 8.最后prev就为反转后的节点
 */