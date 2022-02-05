# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def isPalindrome(self, head):
        """
        :type head: ListNode
        :rtype: bool
        """
        values = []
        cur = head
        while(cur):
            values.append(cur.val)
            cur = cur.next
        
        return values == values[::-1]
        

# 
