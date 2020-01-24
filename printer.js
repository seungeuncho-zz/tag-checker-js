const message = {
  correctAnswer: 'Correctly tagged paragraph',
  wrongAnswer: 'Expected %s found %s',
  blankSign: '#'
}

const printWrongAnswer = (first, second)=> {
  console.log(message.wrongAnswer, first, second)
}

const printCorrectAnswer = () => {
  console.log(message.correctAnswer)
}

module.exports = {
  message: message,
  printWrongAnswer: printWrongAnswer,
  printCorrectAnswer: printCorrectAnswer
}