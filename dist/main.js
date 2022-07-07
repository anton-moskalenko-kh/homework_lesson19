"use strict";

function checkArray() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Error';
  var b = arguments.length > 1 ? arguments[1] : undefined;

  for (var _len = arguments.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    rest[_key - 2] = arguments[_key];
  }

  var map = new Map();
  arguments.length < 5 ? console.log("Error") : console.log("".concat(a, " - ").concat(b, " - ").concat(rest[0]));
  var args = Array.from(arguments).slice(3);
  var obj = args.map(function (item) {
    var index = args.indexOf(item);
    map.set(index, item);
  });
  console.log(Object.fromEntries(map));
}

checkArray(undefined, 2, 3, 4, 5, 'sd');