// USING HASHMAP
//                0  1  2  3  4
// const arr1 =  [1, 2, 3, 4, 6], target1 = 6;
const pair_with_targetsum = function (arr, target_sum) {
  const nums = {}; // [1:0, ]
  for (let i = 0; i < arr.length; i++) { // 1
    const num = arr[i]; // 2
    if ((target_sum - num) in nums) {
      return [nums[target_sum - num], i];
    }
    nums[num] = i;
  }
}

/*
Runtime: 68 ms, faster than 98.79% of JavaScript online submissions for Two Sum.
Memory Usage: 42.9 MB, less than 7.05% of JavaScript online submissions for Two Sum.
*/

const arr1 = [1, 2, 3, 4, 6], target1 = 6;
console.log(pair_with_targetsum(arr1, target1));
// Output: [1, 3]
// Explanation: The numbers at index 1 and 3 add up to 6: 2+4=6

const arr2 = [2, 5, 9, 11], target2 = 11;
console.log(pair_with_targetsum(arr2, target2));
// Output: [0, 2]
// Explanation: The numbers at index 0 and 2 add up to 11: 2+9=11