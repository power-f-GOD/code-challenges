import { moveZeroes } from './move-zeroes';

let nums: number[];

it('outputs [1,3,12,0,0] if input array is [0,1,0,3,12]', () => {
  nums = [0, 1, 0, 3, 12];
  expect(moveZeroes(nums)).toBeUndefined();
  expect(nums).toEqual([1, 3, 12, 0, 0]);
});

it('outputs [0] if input array is [0]', () => {
  nums = [0];
  expect(moveZeroes(nums)).toBeUndefined();
  expect(nums).toEqual([0]);
});

it('outputs [1,0,0] if input array is [0,0,1]', () => {
  nums = [0, 0, 1];
  expect(moveZeroes(nums)).toBeUndefined();
  expect(nums).toEqual([1, 0, 0]);
});
