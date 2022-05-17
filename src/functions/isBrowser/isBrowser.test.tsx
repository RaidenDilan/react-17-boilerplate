import isBrowser from './isBrowser';

describe(__filename, () => {
  it('it should return a boolean', () => {
    expect(typeof isBrowser()).toEqual('boolean');
  });
});
