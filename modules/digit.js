class Digit {
  constructor(digit) {
    this._digit = digit;
  }
  get digit () {
    return this._digit
  }
  isSegmentOn (letter) {
    //console.log(this._digit, letter, ((this._digit >> letter) & 1))
    return ((this._digit >> letter) & 1)
  }
}

module.exports = Digit