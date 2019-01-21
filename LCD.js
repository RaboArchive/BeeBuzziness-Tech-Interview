#!/usr/bin/env node

const tools = require('./modules/tools')
const display = require('./modules/display.js')

const input = process.argv

// We check if we got a valid input
tools.checkInput(input)
// Then we convert this input into a Digit object (and it contains the character version of the input)
const digits = tools.convert(input[2])
// And we display it
display(digits)