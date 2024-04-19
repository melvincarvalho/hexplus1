#!/usr/bin/env node

import bigInt from 'big-integer'

function hexPlus1(hexString) {
  const bigIntValue = bigInt(hexString, 16)
  const incrementedValue = bigIntValue.add(1)
  return incrementedValue.toString(16)
}

function main() {
  const hexString = process.argv[2]
  if (!hexString) {
    console.error('Please provide a hex string as an argument.')
    process.exit(1)
  }

  const result = hexPlus1(hexString)
  console.log(result)
}

export default hexPlus1

if (import.meta.url === `file://${process.argv[1]}`) {
  main()
}
