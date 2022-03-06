# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def reverseBetween(self, head, left, right):
        """
        :type head: ListNode
        :type left: int
        :type right: int
        :rtype: ListNode
        """
        def reverse_linked_list(head):
            pre = None
            cur = head
            while cur:
                next = cur.next
                cur.next = pre
                pre = cur
                cur = next
            return cur

        dummy = ListNode(0,head)
        pre = dummy
        for _ in range(left-1):
            pre = pre.next
        
        right_node = pre
        for _ in range(right-left+1):
            right_node = right_node.next

        start = pre.next
        follow = right_node.next

        pre.next = None
        right_node.next = None

        reverse_linked_list(start)
        pre.next = right_node
        start.next = follow
        return dummy.next
        
# solution 2
class Solution(object):
    def reverseBetween(self, head, left, right):
        """
        :type head: ListNode
        :type left: int
        :type right: int
        :rtype: ListNode
        """
        dummy = ListNode(0, head)
        pre = dummy
        for _ in range(left-1):
            pre = pre.next
        
        cur = pre.next
        for _ in range(right - left):
            follow = cur.next
            cur.next = follow.next
            follow.next = pre.next
            pre.next = follow
        return dummy.next

