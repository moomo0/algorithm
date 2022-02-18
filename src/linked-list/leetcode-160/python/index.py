# using hash set
class Solution(object):
    def getIntersectionNode(self, headA, headB):
        """
        :type head1, head1: ListNode
        :rtype: ListNode
        """
        a_val = set()
        ptr = headA
        while(ptr):
            a_val.add(ptr)
            ptr = ptr.next
        ptr = headB
        while(ptr):
            if(ptr in a_val):
                return ptr
            ptr = ptr.next
        return None
    
# equal length checking
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> ListNode:
        s1, s2 = 0, 0
        p, q = headA, headB
        # 计算长度
        while p:
            p = p.next
            s1 += 1
        while q:
            q = q.next
            s2 += 1
        # 长链表先走，但不确定AB谁长，所以有两个循环，但实际上有至少一个循环不会执行
        p, q = headA, headB
        for i in range(s1 - s2):
            p = p.next
        for i in range(s2 - s1):
            q = q.next
        while p and q and p != q:
            p = p.next
            q = q.next
        return p
