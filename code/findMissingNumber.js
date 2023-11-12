function findMissingNumber(numbers) {
  const n = numbers.length + 1;
  const currentSum = numbers.reduce((sum, num) => sum + num, 0);
  const expectedSum = (n * (n + 1)) / 2;

  return expectedSum - currentSum;
}

const sequence = [1, 2, 4, 6, 3, 7, 8];
console.log(findMissingNumber(sequence));
