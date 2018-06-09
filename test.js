'use strict';

var assert = require('assert');
var deepObjectFind = require('./');

it("should only accept object as first argument", function() {
    var obj = {
      a: 'first argument'
    }
  
    var value = deepObjectFind(obj, 'a');
    assert.equal('first argument', value)
  });

  it("should only accept string as second argument", function() {
    var obj = {
      a: 'second argument'
    }
  
    var value = deepObjectFind(obj, 'a');
    assert.equal('second argument', value)
  });

  it("should throw error if first and second argument is not an object and string", function() {
    var obj = {
      a: 'second argument'
    }
    assert.throws(
        () => deepObjectFind(obj, ['a']),
        Error
      );
  });

  it("should accept thrid argument and set value", function() {
    var obj = {
      a: 'first argument'
    }
  
    var value = deepObjectFind(obj, 'a', 'third argument');
    assert.equal(JSON.stringify({
        a: 'third argument'
      }), JSON.stringify(value))
  });

  it("should return undefined when input doesnt match", function() {
    var obj = {
      a: 'first argument'
    }
  
    var value = deepObjectFind(obj, 'b');
    assert.equal(undefined, value)
  });