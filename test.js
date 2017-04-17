const path = require('path');
const expect = require('chai').expect;
const pathPrefix = require('.');

describe('pathPrefix()', () => {
  it('returns an empty string if the file is on the same level as the path', () => {
    const a = path.join(process.cwd(), 'index.html');
    const b = process.cwd();

    expect(pathPrefix(a, b)).to.equal('');
  });

  it('returns a path prefix if the file is on the same level as the path', () => {
    const a = path.join(process.cwd(), 'sub/index.html');
    const b = process.cwd();

    expect(pathPrefix(a, b)).to.equal('../');
  });
});
