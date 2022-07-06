"use strict";

function checkArray() {
  for (var _len = arguments.length, _ref = new Array(_len), _key = 0; _key < _len; _key++) {
    _ref[_key] = arguments[_key];
  }

  var arr = _ref[0];
  var map = new Map();

  if (arr.length < 5) {
    console.log('Error');
  }

  if (arr[0] === undefined) {
    arr[0] = 'Error';
  }

  var str = arr.slice(0, 3).join('-');
  console.log(str);
  var newArr = arr.slice(3).forEach(function (item) {
    var index = arr.indexOf(item);
    map.set(index, item);
  });
  var obj = Object.fromEntries(map);
  console.log(obj);
}

var data = [undefined, 2, 3, 4, 5, 'sd'];
checkArray(data);