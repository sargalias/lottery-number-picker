import { describe, expect, expectTypeOf, test } from 'vitest';
import lotteryNumberPicker from './index.js';

describe('lotteryNumberPicker', () => {
  test('should throw error when not initialised with a range of 0 or less', () => {
    expect(() => lotteryNumberPicker(0)).toThrowError();
  });

  test('should return 1 when initialised with a range of 1 and then called', () => {
    const result = lotteryNumberPicker(1)();
    expect(result).toBe(1);
  });

  test('should return 1 and then throw error when initialised with a range of 1 and then called twice', () => {
    const getLotteryNumber = lotteryNumberPicker(1);
    getLotteryNumber();
    expect(getLotteryNumber).toThrowError();
  });

  test('when initialised with a range of 2, should return 1 or 2 when called once', () => {
    const getLotteryNumber = lotteryNumberPicker(2);
    const result = getLotteryNumber();
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(2);
  });

  test('when initialised with a range of 2, should return 1 or 2 when called the second time', () => {
    const getLotteryNumber = lotteryNumberPicker(2);
    getLotteryNumber();
    const result = getLotteryNumber();
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(2);
  });

  test('when initialised with a range of 2, when called twice, should return a different number each time', () => {
    const getLotteryNumber = lotteryNumberPicker(2);
    const first = getLotteryNumber();
    const second = getLotteryNumber();
    expect(first).not.toBe(second);
  });
});
