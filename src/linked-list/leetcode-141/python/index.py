# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def hasCycle(self, head):
        """
        :type head: ListNode
        :rtype: bool
        """
        result = []
        while(head):
            result.append(head)
            for i in result:
                if head.next == i:
                    return True
            head = head.next
        return False
