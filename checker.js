const printer = require('./printer')

const isInvalidTag = (match, openRegExs) => {
  return match.includes('\/') ? isInvalidClosingTag(match, openRegExs) :  isInvalidOpeningTag(match, openRegExs)
}


const isInvalidOpeningTag = (match, openRegExs) => {
  openRegExs.push(match)
  return false
}

const isInvalidClosingTag = (match, openRegExs) => {
  if (openRegExs.length === 0) {
    printer.printWrongAnswer(printer.message.blankSign, match)
    return true
  }

  let openingTag = openRegExs.pop()
  if (isDifferentTags(openingTag, match)) {
    printer.printWrongAnswer(openingTag.replace('<','<\/'), match)
    return true
  }

  return false
}

const isDifferentTags = (openingTag, match) => {
  return replaceExceptSingleUpperCaseLetter(match) !== replaceExceptSingleUpperCaseLetter(openingTag)
}

const replaceExceptSingleUpperCaseLetter = match => {
  return match.replace(/[^A-Z]/g, '')
}

module.exports.isInvalidTag = isInvalidTag