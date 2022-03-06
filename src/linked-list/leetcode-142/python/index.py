# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def detectCycle(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        temp = head
        memory = set()
        while head:
            if not head in memory:
                memory.add(head)
                head = head.next
            else:
                return head
        return None

# 双指针
class Solution(object):
    def detectCycle(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        if not head:
            return None
        elif head.next == head:
            return head
        elif not head.next:
            return None
        elif head.next.next == head:
            return head
        elif head.next.next == head.next:
            return head.next
        elif not head.next.next:
            return None

        fast = head.next.next
        slow = head.next
        while not slow == fast:
            slow = slow.next
            if fast.next and fast.next.next:
                fast = fast.next.next
            else:
                return None
        fast = head
        while not fast == slow:
            fast = fast.next
            slow = slow.next
        return slow
      
