/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let prev = new ListNode()
    prev.next = head
    let temp = prev
    while(temp.next && temp.next.next){
        let a = temp.next
        let b = temp.next.next
        a.next = b.next
        b.next = a
        temp.next = b
        temp = temp.next.next
    }
    return prev.next
};
/**
 * 使用前置节点
 * 1.将前置节点的next指向head
 * 2.使用temp保存prev开始遍历
 * 3.a赋值为temp.next,b为next.next
 * 4.开始交换位置，a的下一个节点指向b的下一个节点，也就是要交换的这两个节点后面那个节点
 * 5.b的next指向a，这厮a和b已经交换完成了，b在a前面了
 * 6.然后开始移动，temp的next指向b
 * 7.temp直接移动到转换完成的这两节点后面temp.next.next
 */
