const assert = require('assert')
const checker = require('../checker')

describe('Invalid Closing Tag', function () {
  let openRegExs;
  before('put values in openRegexs', function () {
    openRegExs = ['<B>'];
  });

  it('prints expected </B> found </C> and return true', function () {
    assert.equal(checker.isInvalidTag('</\C>', openRegExs), true);
  });
});

describe('Extra closingTag with empty opening Tag', function () {
  let openRegExs = [];

  it('prints expected # found </B> and return true', function () {
    assert.equal(checker.isInvalidTag('</B>', openRegExs), true);
  });
});

describe('Valid Closing Tag with opening Tag', function () {
  let openRegExs = [];

  before('put values in openRegexs', function () {
    openRegExs = ['<B>'];
  });

  it('Correct closing tag will return false', function () {
    assert.equal(checker.isInvalidTag('</B>', openRegExs), false);
  });

  it('Opening tag will return false', function () {
    assert.equal(checker.isInvalidTag('<C>', openRegExs), false);
  });
});