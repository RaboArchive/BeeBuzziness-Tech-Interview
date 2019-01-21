/*
Representation of the display layout :
  .A.
  F.B
  .G.
  E.C
  .D.
*/

const SEGMENT = {
  A: 0,
  B: 1,
  C: 2,
  D: 3,
  E: 4,
  F: 5,
  G: 6
}

const LINE = '_'
const PIPE = '|'

module.exports = (digits) => { 

  segmentLine(digits, SEGMENT.A)
  segmentPipe(digits, SEGMENT.F, SEGMENT.B)
  segmentLine(digits, SEGMENT.G)
  segmentPipe(digits, SEGMENT.E, SEGMENT.C)
  segmentLine(digits, SEGMENT.D)
  
}

// Utils
const segmentLine = (digits, segment) => {
  for (let k = 0; k < digits.length; k++) {
    process.stdout.write(' ' + draw(digits[k], segment, LINE) + ' \t')
  }
  process.stdout.write('\n')
}

const segmentPipe = (digits, segment1, segment2) => {
  for (let k = 0; k < digits.length; k++) {
    process.stdout.write(`${draw(digits[k], segment1, PIPE)} ${draw(digits[k], segment2, PIPE)}\t`)
  }
  process.stdout.write('\n')
}


let draw = (digit, segment, char) => {
  if (digit.isSegmentOn(segment)) {
    return char
  }
  return ' '
}