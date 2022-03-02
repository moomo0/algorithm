/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let prev = new ListNode()
    prev.next = head
    let temp = prev
    for(let i=0;i<left-1;i++){
        temp = temp.next
    }
    let curr = temp.next
    for(let i=0; i<right-left; i++){
        let next = curr.next
        curr.next = next.next
        next.next = temp.next
        temp.next = next
    }
    return prev.next
};
/**
 * 使用前置节点
 * 1.将前置节点的next指向head
 * 2.使用temp保存prev开始遍历
 * 3.找到left前一个节点，遍历到left-1
 * 4.当前节点curr为temp.next
 * 5.开始反转直到right-left止
 * 6.使用next保存下一个节点，curr.next
 * 7.将下一个节点curr.next指向再下一个节点
 * 8.next.next开始反转指向temp.next
 * 9.移动temp的下一个节点到next
 * 10.返回prev.next
 */
