

class Solution(object):
    def findUnsortedSubarray(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        n = len(nums)
        maxn, right = float("-inf"), -1
        minn, left = float("inf"), -1

        for i in range(n):
            if maxn > nums[i]:
                right = i
            else:
                maxn = nums[i]
            
            if minn < nums[n - i - 1]:
                left = n - i - 1
            else:
                minn = nums[n - i - 1]
        
        return 0 if right == -1 else right - left + 1

