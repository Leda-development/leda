import { getFileWordEnding } from './helpers';

describe('FileWordEnding', () => {
  it('should have correct ending if 1 file', () => {
    const ending = getFileWordEnding(1);

    expect(ending).toEqual('a');
  });

  it('should have correct ending if more than 1 file', () => {
    const ending = value => getFileWordEnding(value);

    expect(ending(2)).toEqual('ов');

    expect(ending(111)).toEqual('ов');

    expect(ending(51)).toEqual('a');
  });
});
