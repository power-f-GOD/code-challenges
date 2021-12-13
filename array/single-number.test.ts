import { singleNumber } from './single-number';

let nums: number[];

it('outputs 1 if input array is [2,2,1]', () => {
  nums = [2, 2, 1];
  expect(singleNumber(nums)).toEqual(1);
});

it('outputs 4 if input array is [4,1,2,1,2]', () => {
  nums = [4, 1, 2, 1, 2];
  expect(singleNumber(nums)).toEqual(4);
});

it('outputs 1 if input array is [1]', () => {
  nums = [1];
  expect(singleNumber(nums)).toEqual(1);
});

it('outputs -755 if input array is [-967,-590,980,-806,145,-881,357,-787,-592,859,627,-929,296,818,-194,586,-106,-479,967,132,-396,-692,464,726,-967,-590,980,-806,145,-881,357,-787,-592,859,627,-929,296,818,-194,586,-106,-479,967,132,-396,-692,464,726,-755]', () => {
  nums = [
    -967,
    -590,
    980,
    -806,
    145,
    -881,
    357,
    -787,
    -592,
    859,
    627,
    -929,
    296,
    818,
    -194,
    586,
    -106,
    -479,
    967,
    132,
    -396,
    -692,
    464,
    726,
    -967,
    -590,
    980,
    -806,
    145,
    -881,
    357,
    -787,
    -592,
    859,
    627,
    -929,
    296,
    818,
    -194,
    586,
    -106,
    -479,
    967,
    132,
    -396,
    -692,
    464,
    726,
    -755
  ];
  expect(singleNumber(nums)).toEqual(-755);
});
