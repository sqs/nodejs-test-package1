var fs = require("fs");

// Dummy test function that uses underscore.
exports.Foo = function(s) {
  fs.existsSync("asdf");
  return s + " Length=" + s.length;
};

console.log(exports.Foo("Hello!"));
