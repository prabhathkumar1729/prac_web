"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var x = 5;
var y;
var sampleFunction = function sampleFunction() {
  return "this is a return value";
};
var Person = /*#__PURE__*/_createClass(function Person(name, age) {
  _classCallCheck(this, Person);
  this.name = name;
  this.age = age;
});
var hasThree = [1, 2, 3].includes(3);
console.log(hasThree);
y || (y = "a new value");
console.log(y);
