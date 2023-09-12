const apiUrl = 'https://opentdb.com/api.php?amount=10&category=22&difficulty=medium&type=multiple'


const button = document.querySelector('#fetch');

button.addEventListener('click', async e => { 

 console.log('1. Click');

 const response =  await fetch(apiUrl);
 console.log('2. got response:', response);

 const quizData = await response.json();
 console.log('3. got data:', quizData);

})