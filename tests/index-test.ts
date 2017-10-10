import { expect } from 'chai';
import obj from '../src/index';

const { describe, it } = global;

describe('obj', () => {
  it('works', () => expect(obj).to.be.ok);
});
