import { maxProfit } from './max-profit';

let nums: number[];

it('returns 7 if input prices is [7,1,5,3,6,4]', () => {
  nums = [7, 1, 5, 3, 6, 4];
  expect(maxProfit(nums)).toEqual(7);
});

it('returns 4 if input prices is [1,2,3,4,5]', () => {
  nums = [1, 2, 3, 4, 5];
  expect(maxProfit(nums)).toEqual(4);
});

it('returns 0 if input prices is [7,6,4,3,1]', () => {
  nums = [7, 6, 4, 3, 1];
  expect(maxProfit(nums)).toEqual(0);
});

it('returns 2 if input prices is [2,4,1]', () => {
  nums = [2, 4, 1];
  expect(maxProfit(nums)).toEqual(2);
});
