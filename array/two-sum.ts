/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

  You may assume that each input would have exactly one solution, and you may not use the same element twice.

  You can return the answer in any order.

  Example 1:
  Input: nums = [2,7,11,15], target = 9
  Output: [0,1]
  Output: Because nums[0] + nums[1] == 9, we return [0, 1].

  Example 2:
  Input: nums = [3,2,4], target = 6
  Output: [1,2]

  Example 3:
  Input: nums = [3,3], target = 6
  Output: [0,1]
  
  Constraints:
  2 <= nums.length <= 104
  -109 <= nums[i] <= 109
  -109 <= target <= 109
  Only one valid answer exists.
  

  Follow-up: Can you come up with an algorithm that is less than O(n^2) time complexity?
 */

export const twoSum = (nums: number[], target: number): number[] => {
  const map = new Map<number, Array<{ diff: number; index: number }>>();
  const indices: number[] = [];

  nums.forEach((num, i) => {
    // store a linked list (or an array in this case) of diffs (and indices) in position whether or not a collision occurs
    map.set(num, [...(map.get(num) || []), { diff: target - num, index: i }]);
  });

  nums.forEach((num, i) => {
    const diff = target - num;
    const collisions = map.get(num);

    if (map.has(diff) && i !== map.get(diff)![0]?.index) {
      collisions?.forEach(({ diff, index }, j) => {
        if (num + diff === target) {
          indices.push(index);
          map.set(num, [...(collisions?.filter((_, k) => k !== j) || [])]);
        }
      });
    }
  });

  return indices;
};
