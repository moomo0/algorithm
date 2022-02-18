class Solution(object):
    def deleteDuplicates(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        back = set()
        if not head:
            return None
        temp = head
        back.add(temp.val)
        while(temp.next):
            if temp.next.val in back:
                temp.next = temp.next.next
            else:
                back.add(temp.next.val)
                temp = temp.next
        
        return head
        
