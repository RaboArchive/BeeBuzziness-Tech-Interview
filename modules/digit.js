class Digit {
  constructor(digit) {
    this._digit = digit;
  }
  get digit () {
    return this._digit
  }
  isSegmentOn (letter) {
    return ((this._digit >> letter) & 1)
  }
}

module.exports = Digit