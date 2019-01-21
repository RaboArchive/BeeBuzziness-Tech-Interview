const Digit = require('./digit')

const checkInput = (input) => {
  const regexNumber = /^[0-9]{3}$/g

  if (input.length !== 3 ) {
    throw new Error(`Wrong number of parameters. (Expected 1, got ${input.length - 2})`)
  } else if (!input[2] || !input[2].match(regexNumber)) {
    throw new Error('Invalid parameter receive.')
  }
}

// Correspondance table between number and Seven Segment equivalent
const digitSegmentValue = {
  0 : 0x3F,
  1 : 0x06,
  2 : 0x5B,
  3 : 0x4F,
  4 : 0x66,
  5 : 0x6D,
  6 : 0x7D,
  7 : 0x07,
  8 : 0x7F,
  9 : 0x6F
}

/**
 * Convert 
 * @param {String} input : '111' 
 */
const convert = (input) => {
  let numbers = input.split('')
  let digits = []
  for (let i = 0; i < numbers.length; i++) {
    let digit = digitSegmentValue[numbers[i]]
    if (!digit) {
      digit = digitSegmentValue[0]
    }
    digits.push(new Digit(digit))
  }
  return digits
}



module.exports = {
  checkInput,
  convert
}