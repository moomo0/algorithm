class Solution(object):
    def mergeTwoLists(self, list1, list2):
        """
        :type list1: Optional[ListNode]
        :type list2: Optional[ListNode]
        :rtype: Optional[ListNode]
        """
        if list1 is None:
            return list2
        elif list2 is None:
            return list1
        if list1.val <= list2.val:
            start = list1
            list1 = list1.next
        else:
            start = list2
            list2 = list2.next
        backup = start
        while list1 and list2:
            if list1.val <= list2.val:
                start.next = list1
                list1 = list1.next
            else:
                start.next = list2
                list2 = list2.next
            start = start.next

        if list1:
            start.next = list1
        else:
            start.next = list2
        return backup

################
# 递归
################
class Solution(object):
    def mergeTwoLists(self, list1, list2):
        """
        :type list1: Optional[ListNode]
        :type list2: Optional[ListNode]
        :rtype: Optional[ListNode]
        """
        if list1 is None:
            return list2
        elif list2 is None:
            return list1
        elif list1.val < list2.val:
            list1.next = self.mergeTwoLists(list1.next, list2)
            return list1
        else:
            list2.next = self.mergeTwoLists(list1, list2.next)
            return list2
