# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None
class Solution(object):
    def deleteNode(self, head, val):
        """
        :type head: ListNode
        :type val: int
        :rtype: ListNode
        """
        cur = head
        if cur.val == val:
            return cur.next
        while cur.next:
            if cur.next.val == val:
                if cur.next.next:
                    cur.next = cur.next.next
                else:
                    cur.next = None
                return head
            cur = cur.next
        return head
