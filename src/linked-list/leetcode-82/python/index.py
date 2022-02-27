# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def deleteDuplicates(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        if not head:
            return head
        
        dummy = ListNode(0, head)

        prev = dummy
        while prev.next and prev.next.next:
            if prev.next.val == prev.next.next.val:
                value = prev.next.val
                while prev.next and prev.next.val == value:
                    prev.next = prev.next.next
            else:
                prev = prev.next

        return dummy.next

