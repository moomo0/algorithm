# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def swapPairs(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        dummy = ListNode(0,head)
        prev = dummy
        while prev.next and prev.next.next:
            if prev.next.next.next:
                follow = prev.next.next.next
            else:
                follow = None
            first = prev.next
            second = prev.next.next

            prev.next = second
            second.next = first
            first.next = follow
            prev = first
        return dummy.next
