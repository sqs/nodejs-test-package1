var _ = require("underscore"), glob = require("glob");

// Dummy test function that uses underscore.
exports.Foo = function(s) {
  glob.sync;
  return s + " Length=" + _.size(s);
};

console.log(exports.Foo("Hello!"));
