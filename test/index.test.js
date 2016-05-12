import { expect } from 'chai';
import { add } from '../src/index';

describe('add', () => {
  it('should add a and b correctly', () => {
    const a = 10;
    const b = 20;
    const sum = add(a, b);
    expect(sum).to.equal(30);
  });
});
