'use strict';
module.exports = is2;

const is1 = require('is-eq-one');
const isNumber = require('is-number');
const isString = require('is-string');
const isUndefined = require('is-undefined');
const isNull = require('is-null');

global.jQuery = require('jquery');
require('jquery-basic-arithmetic-plugin');

const isTrue = require('is-true');

function is2(x) {
    // Check if given object is undefined
    if (isUndefined(x)) {
        return false;
    }
    
    // Check if given object is null
    if (isNull(x)) {
        return false;
    }
    
    // Check if given object is string
    if (isString(x)) {
        return false;
    }
    
    // Check if given object is number
    if (!isNumber(x)) {
        return false;
    }
    
    // Check if given number is 2
    return isTrue({result: is1(jQuery.subtract(x, 1))}, 'result');
}
