import { plusOne } from './plus-one';

let nums: number[];

it('outputs [1,2,4] if input array is [1,2,3]', () => {
  nums = [1, 2, 3];
  expect(plusOne(nums)).toEqual([1, 2, 4]);
});

it('outputs [4,3,2,2] if input array is [4,3,2,1]', () => {
  nums = [4, 3, 2, 1];
  expect(plusOne(nums)).toEqual([4, 3, 2, 2]);
});

it('outputs [1] if input array is [0]', () => {
  nums = [0];
  expect(plusOne(nums)).toEqual([1]);
});

it('outputs [1,0] if input array is [9]', () => {
  nums = [9];
  expect(plusOne(nums)).toEqual([1, 0]);
});
