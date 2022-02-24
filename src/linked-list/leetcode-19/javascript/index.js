/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if(!head) return head
    if(!head.next && n==1)return null
    let fast = head
    let slow = null
    let index = 0
    while(fast){
        if(!fast.next){
            if(index == n-1){
                return head.next
            }else{
                slow.next = slow.next.next
            }
        }
        fast = fast.next
        index++
        if(index>=n){
            if(index===n){
                slow = head
            }else{
                slow = slow.next
            }
        }
    }
    return head
};
/**
 * 使用快慢指针
 * 1.先判断一下临界条件
 * 2.创建快慢指针，fast赋值为head
 * 3.创建索引index
 * 4.快指针开始走，index计数
 * 5.当index为n时，slow开始走
 * 6.最后fast走到头，fast.next为null，开始删除操作
 * 7.index == n-1时，直接返回head.next
 * 8.否则将slow的next节点指向next的next节点进行删除操作
 */
