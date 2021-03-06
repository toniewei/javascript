'use strict';

var BASE = 8;

function Octal(octal) {
  this.digits = octal.split('').reverse().map(this.digitValue);
}

Octal.prototype.toDecimal = function () {
  var decimal = this.digits.reduce(this.accumulator, 0);
  return isNaN(decimal) ? 0 : decimal;
};

Octal.prototype.digitValue = function (value) {
  var result = Number(value);
  return (result < BASE) ? result : Number.NaN;
};

Octal.prototype.accumulator = function (decimal, digit, index) {
  return decimal += digit * Math.pow(BASE, index);
};

module.exports = Octal;
