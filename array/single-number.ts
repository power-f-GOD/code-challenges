/**
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

  You must implement a solution with a linear runtime complexity and use only constant extra space.

  

  Example 1:

  Input: nums = [2,2,1]
  Output: 1

  Example 2:

  Input: nums = [4,1,2,1,2]
  Output: 4

  Example 3:

  Input: nums = [1]
  Output: 1
 */

export const singleNumber = (nums: number[]): number => {
  let numsString = '';

  for (const num of nums) {
    const numPattern = new RegExp(`,${num},`);

    if (numPattern.test(numsString)) {
      numsString = numsString.replace(numPattern, '');
      continue;
    }

    numsString += `,${num},`;
  }

  return +numsString.split(',')[1];
};
