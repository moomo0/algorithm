/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let tail = head
    while(tail&&tail.next){
        if(tail.val === tail.next.val){
            tail.next = tail.next.next
        }else{
            tail = tail.next
        }
    }
    return head
};
/**
 * 使用缓存节点
 * 1.遍历链表
 * 2.当前节点与下一个节点相等，则将next指向下一个节点
 * 3.返回head
 */
