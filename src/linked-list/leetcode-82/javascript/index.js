/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if(!head)return head
    let prev = new ListNode()
    prev.next = head
    let temp = prev
    while(temp.next && temp.next.next){
        let a = temp.next 
        let b = temp.next.next
        if(a.val === b.val){
            while(temp.next && temp.next.val === a.val){
                temp.next = temp.next.next
            }
        }else{
            temp = temp.next
        }
    }
    return prev.next
};
/**
 * 使用前置节点
 * 1.将前置节点的next指向head
 * 2.使用temp保存prev开始遍历
 * 3.a赋值为temp.next,b为next.next.next
 * 4.当a的val和b的val相等时，开始查找temp.next连续相等的节点，使用while查找
 * 5.使用temp.next = temp.next.next一个一个的删除
 * 6.如果不等则向前移动
 * 7.最后返回prev.next
 */
