import { removeDuplicates } from './remove-duplicates';

let nums: number[];

it('returns k = 2 if input array is [1,2]', () => {
  nums = [1, 2];
  expect(removeDuplicates(nums)).toEqual(2);
  expect(nums).toEqual([1, 2]);
});

it('returns k = 2 if input array is [1,1,2]', () => {
  nums = [1, 1, 2];
  expect(removeDuplicates(nums)).toEqual(2);
  expect(nums).toEqual([1, 2, '_']);
});

it('return k = 5 if input array is [0,0,1,1,1,2,2,3,3,4]', () => {
  nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
  expect(removeDuplicates(nums)).toEqual(5);
  expect(nums).toEqual([0, 1, 2, 3, 4, '_', '_', '_', '_', '_']);
});

it('returns k = 1 if input array is [1, 1, 1]', () => {
  nums = [1, 1, 1];
  expect(removeDuplicates(nums)).toEqual(1);
  expect(nums).toEqual([1, '_', '_']);
});
