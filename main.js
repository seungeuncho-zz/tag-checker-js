const checker = require('./checker')
const printer = require('./printer')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const reg = /<\/?[A-Z]{1}>/g

let openRegExs

// read one line
rl.on('line', function (line) {

  checkTag(line)

  openRegExs.length > 0 ? printer.printWrongAnswer(openRegExs.pop().replace('<','<\/'), printer.message.blankSign) : printer.printCorrectAnswer()

  rl.close()
})
.on('close', function () {
  process.exit()
});

const checkTag = (match) => {
  openRegExs = []
  let matches;
  // if input matches regex then validates tag
  while (matches = reg.exec(match)) if (checker.isInvalidTag(matches[0], openRegExs)) rl.close()
}
