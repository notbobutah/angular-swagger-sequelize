/// <reference path="../typings/chai/chai.d.ts" />
"use strict";
var assertsImport = require('chai');
var assert = assertsImport.assert;
describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal(-1, [1, 2, 3].indexOf(5));
            assert.equal(-1, [1, 2, 3].indexOf(0));
        });
    });
});

//# sourceMappingURL=../source-maps/tests/card-service-tests.js.map
