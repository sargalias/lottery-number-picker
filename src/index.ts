import arrayShuffle from 'array-shuffle';

const lotteryNumberPicker = (range: number): (() => number) => {
  if (!range) {
    throw new Error(
      'lotteryNumberPicker must be initialised with a range of 1 or more',
    );
  }
  const numbers = _generateShuffledArray(range);
  let i = 0;

  const execute = (): number => {
    if (i >= numbers.length) {
      throw new Error('Lottery numbers exhausted.');
    }

    const result = numbers[i];
    i++;
    return result;
  };
  return execute;
};

const _generateShuffledArray = (range: number): number[] => {
  const array = [];
  for (let i = 1; i <= range; i++) {
    array.push(i);
  }
  const shuffledArray = arrayShuffle(array);
  return shuffledArray;
};

export default lotteryNumberPicker;
