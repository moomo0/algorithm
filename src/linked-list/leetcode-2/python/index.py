class Solution(object):
    def addTwoNumbers(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        add = 0
        head = l1
        while l1.next and l2.next:
            l1.val = l1.val + l2.val + add
            if l1.val >= 10:
                add = 1
                l1.val = l1.val - 10
            else:
                add = 0
            l1 = l1.next
            l2 = l2.next
        
        l1.val = l1.val + l2.val + add
        if l1.val >= 10:
            add = 1
            l1.val = l1.val - 10
        else:
            add = 0

        if l2.next:
            l1.next = l2.next
        elif not l1.next:
            if add == 1:
                l1.next = ListNode(val=1)
            return head

        while add == 1:
            l1.next.val += 1
            if l1.next.val == 10:
                l1.next.val = 0
                l1 = l1.next
                if l1.next == None:
                    l1.next = ListNode(val=1)
                    return head

            else:
                add = 0
        return head
