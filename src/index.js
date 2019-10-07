module.exports = function multiply(first, second) {
  var mult = String(BigInt(first)*BigInt(second));
  return mult;
}