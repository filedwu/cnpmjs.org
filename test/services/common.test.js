/**!
 * cnpmjs.org - test/services/common.test.js
 *
 * Copyright(c) fengmk2 and other contributors.
 * MIT Licensed
 *
 * Authors:
 *   fengmk2 <fengmk2@gmail.com> (http://fengmk2.github.com)
 */

'use strict';

/**
 * Module dependencies.
 */

var mm = require('mm');
var config = require('../../config');
var common = require('../../services/common');

describe('services/common.test.js', function () {
  afterEach(mm.restore);

  describe('isPrivatePackage()', function () {
    it('should detect prviate package', function* () {
      mm(config, 'privatePackages', ['some-private-package', 'foobar2']);
      (yield* common.isPrivatePackage('@cnpm/ooxx')).should.equal(true);
      (yield* common.isPrivatePackage('@cnpm/some-private-package')).should.equal(true);
      (yield* common.isPrivatePackage('some-private-package')).should.equal(true);
      (yield* common.isPrivatePackage('foobar2')).should.equal(true);

      (yield* common.isPrivatePackage('foobar')).should.equal(false);
      (yield* common.isPrivatePackage('pedding-2')).should.equal(false);
    });
  });
});
