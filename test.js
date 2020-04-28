"use strict";

require("mocha");
const assert = require("assert");
const is-eq-two = require("../");

describe("is-eq-two", function() {
    it("should return true if the number is 2", function() {
        assert(is2(2));
    });
  
    it("should return false if the number either is not 2 or is not a number at all", function() {
        assert(!is2(2 + 1));
        assert(!is2(null));
        assert(!is2(undefined));
        assert(!is2("2"));
    });
});
