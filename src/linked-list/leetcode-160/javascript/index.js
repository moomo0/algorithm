/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if(!headA || !headB)return null
    let l1 = headA
    let l2 = headB
    while(l1!==l2){
        if(!l1){
            l1=headB
        }else{
            l1 = l1.next
        }
        if(!l2){
            l2=headA
        }else{
            l2 = l2.next
        }
    }
    return l1
};
/**
 * 使用双指针的办法
 * 1.当l1与l2不等开始查找
 * 2.l1与l2同时到达一个节点时，则该节点为相交节点
 * 3.如果不相交，最后l1与l2都为null时l1===l2
 * 4.最终l1或l2为返回结果
 */

 var getIntersectionNode = function(headA, headB) {
    if(!headA || !headB)return null
    let hash = new Set()
    while(headA){
        hash.add(headA)
        headA = headA.next
    }
    while(headB){
        if(hash.has(headB))return headB
        headB = headB.next
    }
    return null
};
/**
 * 使用hash的办法
 * 1.建一个Set，存headA的值
 * 2.遍历headB，判断是否存在与Set中
 * 3.如果存在则相交节点为该节点
 * 4.不存在则返回null
 */