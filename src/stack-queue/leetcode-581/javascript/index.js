/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    if(isSort(nums)){
        return 0
    }
    const copyNums = [...nums].sort((a,b)=>a-b)
    let left = 0
    while(nums[left]===copyNums[left]){
        left++
    }
    let right = nums.length-1
    while(nums[right]===copyNums[right]){
        right--
    }
    return right-left+1
};
const isSort = (nums) => {
    let n = nums.length
    for(let i=1; i<n; i++){
        if(nums[i]<nums[i-1]){
            return false
        }
    }
    return true
}
/**
 * 使用排序的方法
 * 1.首先判断数组是否已经排序，如果是排序数组则返回0
 * 2.将数组复制一份进行排序
 * 3.从左边开始找到不同值的位置
 * 4.从右边开始找不同值的位置
 * 5.中间部分的长度则为解
 */
