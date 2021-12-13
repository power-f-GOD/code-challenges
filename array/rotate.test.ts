import { rotate } from './rotate';

let nums: number[];

it('outputs [5,6,7,1,2,3,4] if input array is [1,2,3,4,5,6,7] and k = 3', () => {
  nums = [1, 2, 3, 4, 5, 6, 7];
  expect(rotate(nums, 3)).toBeUndefined();
  expect(nums).toEqual([5, 6, 7, 1, 2, 3, 4]);
});
