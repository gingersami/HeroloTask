import {CapitalizeFirstPipe} from './capitalize-first-letter.pipe';

describe('CapitalizeFirstLetterPipe', () => {
  it('create an instance', () => {
    const pipe = new CapitalizeFirstPipe();
    expect(pipe).toBeTruthy();
  });
});
