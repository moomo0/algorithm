
class Solution(object):
    def getKthFromEnd(self, head, k):
        """
        :type head: ListNode
        :type k: int
        :rtype: ListNode
        """
        counter = 0
        temp = head
        while(temp):
            temp = temp.next
            counter += 1
        if counter < k:
            return None
        else:
            for i in range(counter - k):
                head = head.next

            return head
