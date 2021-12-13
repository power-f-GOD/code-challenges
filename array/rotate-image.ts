export const rotateImage = (matrix: number[][]): void => {
  const matrixSize = matrix.length;

  for (let i = 0; i < matrixSize; i++) {
    for (let j = 0; j < matrixSize; j++) {
      matrix[j].push(matrix[i].shift()!);
    }
  }

  matrix.forEach((row) => row.reverse());
};
