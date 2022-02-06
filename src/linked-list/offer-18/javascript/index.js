/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function(head, val) {
    let prev = new ListNode()
    prev.next = head
    let temp = prev
    while(temp.next){
        if(temp.next.val === val){
            temp.next = temp.next.next
        }else{
            temp = temp.next
        }
    }
    return prev.next
};
/**
 * 使用设置前置节点的办法
 * 1.将prev初始化一个空ListNode
 * 2.将next直向head
 * 3.用temp赋值prev
 * 4.遍历temp.next
 * 5.当temp.next的值为val时，将next指向next.next,删除节点
 * 6.返回prev.next
 * 如果遍历head，当head与val的值相等的时候，却无法删除当前节点
 * 因此创建前置节点，将next指向head，遍历temp.next
 * temp.next的值为val时，可以通过temp.next=temp.next.next删除节点
 */
