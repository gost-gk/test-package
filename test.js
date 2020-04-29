"use strict";

require("mocha");
const assert = require("assert");
const is2 = require("./");

describe("is2", function() {
    it("should return true if the number is 2", function() {
        assert(is2(2));
    });
  
    it("should return false if the number is not 2", function() {
        assert(!is2(2 + 1));
    });
    
    it("should return false if the number is not a number at all", function() {
        assert(!is2(null));
        assert(!is2(undefined));
        assert(!is2("2"));
    });
});
