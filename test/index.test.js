import { expect } from 'chai';
import { add, subtract } from '../src/index';

describe('Basic operations', () => {
  it('should add a and b correctly', () => {
    const a = 10;
    const b = 20;
    const sum = add(a, b);
    expect(sum).to.equal(30);
  });

  it('should subtract a and b correctly', () => {
    const a = 30;
    const b = 20;
    const result = subtract(a, b);
    expect(result).to.equal(10);
  });
});
