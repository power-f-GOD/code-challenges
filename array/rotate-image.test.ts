import { rotateImage } from './rotate-image';

let matrix: number[][];

it(`returns [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
] if input matrix = [
  [7, 4, 1],
  [8, 5, 2],
  [9, 6, 3]
]`, () => {
  matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  expect(rotateImage(matrix)).toBeUndefined();
  expect(matrix).toEqual([
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3]
  ]);
});

it(`returns [
  [15, 13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7, 10, 11]
] if input matrix = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16]
]`, () => {
  matrix = [
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16]
  ];
  expect(rotateImage(matrix)).toBeUndefined();
  expect(matrix).toEqual([
    [15, 13, 2, 5],
    [14, 3, 4, 1],
    [12, 6, 8, 9],
    [16, 7, 10, 11]
  ]);
});
