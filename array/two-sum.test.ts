import { twoSum } from './two-sum';

let nums: number[];

it('outputs [0,1] if input nums = [2,7,11,15], target = 9', () => {
  nums = [2, 7, 11, 15];
  expect(twoSum(nums, 9)).toEqual([0, 1]);
});

it('outputs [1,2] if input nums = [3,2,4], target = 6', () => {
  nums = [3, 2, 4];
  expect(twoSum(nums, 6)).toEqual([1, 2]);
});

it('outputs [0,1] if input nums = [3,3], target = 6', () => {
  nums = [3, 3];
  expect(twoSum(nums, 6)).toEqual([0, 1]);
});

it('outputs [0,2] if input nums = [-3,4,3,90], target = 0', () => {
  nums = [-3, 4, 3, 90];
  expect(twoSum(nums, 0)).toEqual([0, 2]);
});
