/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let n = nums.length
    let hash = new Map()
    for(let i = 0 ;i < n; i++){
        if(hash.has(target - nums[i])){
            return [i, hash.get(target - nums[i])]
        }else{
            hash.set(nums[i],i)
        }
    }
    return []
};
/**
 * 使用hash
 * 1.使用hash存储nums值，和索引
 * 2.如果存在target - nums[i]，则当前索引i和hash中保存的索引则为结果
 */
