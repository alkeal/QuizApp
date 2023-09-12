const apiUrl = 'https://opentdb.com/api.php?amount=10&category=22&difficulty=medium&type=multiple'


const button = document.querySelector('#fetch');

button.addEventListener('click', async e => { 

 console.log('1. Click');

 const response =  await fetch(apiUrl);
 console.log('2. got response:', response);

 const quizData = await response.json();
 console.log('3. got data:', quizData);


  const questions = quizData.results;
  createQuestions(questions);

})


const createQuestions = (questions) => {

    const questionContainer = document.querySelector('#questions');

    questions.forEach(question => {
        
    const questionElement = createQuestionElement(question);
      questionContainer.appendChild(questionElement);
    });








}

const createQuestionElement = (question) => {

  const questionElement = document.createElement('div');
  questionElement.className = 'question';

  const questionHeading = document.createElement('h2');
  questionHeading.innerHTML = question.question;

  questionElement.appendChild(questionHeading);

 

  return questionElement;




}