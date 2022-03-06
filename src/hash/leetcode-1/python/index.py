class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        complimentary = set()
        i = 0
        j = 0
        for i in range(len(nums)):
            val = nums[i]
            comp = target-val
            if comp in complimentary:
                for j in range(i):
                    if nums[j] == comp:
                        return j,i
            else:
                complimentary.add(val)
          
# 简单写法
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hashtable = dict()
        for i, num in enumerate(nums):
            if target - num in hashtable:
                return [hashtable[target - num], i]
            hashtable[nums[i]] = i
        return []
