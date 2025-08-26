const questions = [
  {
    category: 'Science',
    question: 'What planet is known as the Red Planet?',
    choices: ['Earth', 'Mars', 'Venus'],
    answer: 'Mars'

  },

  {
    category: 'Technology',
    question: 'What does HTML stand for?',
    choices: ['Hyperlinks and Text Markup Language', 'Hyper Text Markup Language', 'Home Tool Markup Language'],
    answer: 'Hyper Text Markup Language'

  },
  {
    category: 'History',
    question: 'Who was the first President of the United States?',
    choices: ['Abraham Lincoln', 'George Washington', 'Thomas Jefferson'],
    answer: 'George Washington'

  },
  {
    category: 'Sports',
    question: 'How many players are on a standard soccer team on the field?',
    choices: ['9', '10', '11'],
    answer: '11'

  },
  {
    category: 'Science',
    question: 'What gas do humans exhale when they breathe out?',
    choices: ['Oxygen', 'Carbon Dioxide', 'Nitrogen'],
    answer: 'Carbon Dioxide'

  }




];


function getRandomQuestion(questions) {
  if (!questions || questions.length === 0) {
    return null;
  } else {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
  }
}

function getRandomComputerChoice(choices) {
  if (!choices || choices.length === 0) {
    return null;
  }else {
    const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
  }
  

}

function getResults(question, choice){
if (choice === question.answer) {
  return "The computer's choice is correct!";
}else{
      return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
   
  
}
}



const randomQuestion = getRandomQuestion(questions);
console.log("Question: " + randomQuestion.question);

const computerChoice = getRandomComputerChoice(randomQuestion.choices);
console.log("Computer Choice: " +computerChoice);

const result = getResults(randomQuestion, computerChoice);
console.log("Result: "+result)
