import { containsDuplicate } from './contains-duplicate';

let nums: number[];

it('outputs true if input array is [1,2,3,1]', () => {
  nums = [1, 2, 3, 1];
  expect(containsDuplicate(nums)).toEqual(true);
});

it('outputs false if input array is [1,2,3,4]', () => {
  nums = [1, 2, 3, 4];
  expect(containsDuplicate(nums)).toEqual(false);
});

it('outputs true if input array is [1,1,1,3,3,4,3,2,4,2]', () => {
  nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
  expect(containsDuplicate(nums)).toEqual(true);
});
