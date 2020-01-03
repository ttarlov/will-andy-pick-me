var questionAnswerSection = document.querySelector('.question-answer-section');
var randomAnswer = ['It is certain', 'It is decidedly so', 'Without a doubt',
'Very doubtful', 'Yes - definitely', 'Outlook good', 'Ask again later',
'My reply is no', 'Outlook not so good', 'Yes'];
var answerQuestionSection = document.querySelector('.answer-question');
var ball = document.querySelector('.eight-ball');
var inputQuestion = document.querySelector('.input-text');
var clearBtn = document.querySelector('.clear-btn');
var answerBtn = document.querySelector('.answer-btn');
var favoriteBtn = document.querySelector('.favorite-btn');
var favoriteAnswerSection = document.querySelector('.favorite-answer');

questionAnswerSection.addEventListener('click', eventHandler);
inputQuestion.addEventListener('keyup', enableAnswerBtn);


function enableAnswerBtn() {
  // if ()
  answerBtn.disabled = false;
}

function showRandomAnswer() {
  // debugger
  var j = Math.floor((Math.random() * 9) + 1);
  answerQuestionSection.insertAdjacentHTML('afterbegin', `<p class ="inserted-question-js inserted-question para">${randomAnswer[j]}</p>`);
  answerQuestionSection.insertAdjacentHTML('afterbegin', `<p class ="inserted-answer-js inserted-answer para">"${inputQuestion.value}"</p>`);
  console.log(j);
  answerBtn.disbled = true;
  favoriteBtn.classList.remove('hidden');
  inputQuestion.disabled = true;
}

function eventHandler(event) {
  if (event.target.classList.contains('answer-btn')) {
    ball.classList.add('hidden');
    showRandomAnswer();
    clearBtn.disabled = false;
    answerBtn.disabled = true;
    clearBtn.classList.remove('clear-btn-disabled');
  } else if (event.target.classList.contains('clear-btn')) {
    clearForm();
    clearBtn.disabled = true;
    clearBtn.classList.add('clear-btn-disabled');
    answerBtn.disabled = true;
    inputQuestion.disabled = false;
  } else if (event.target.classList.contains('favorite-btn')) {
    addToFavorite();
  }
}

function clearForm() {
  var para = document.querySelectorAll('.para');
  for (var i = 0; i < para.length; i++) {
    // console.log(para[i]);
    para[i].remove();
  }

  ball.classList.remove('hidden');
  inputQuestion.value = 'Ask your question here!';
}


function addToFavorite(event) {
  var favoriteAnswerSelector = document.querySelector('.inserted-question-js');
  var favoriteAnswer = favoriteAnswerSelector.innerText;
  favoriteAnswerSection.classList.remove('hidden');
  favoriteAnswerSection.innerHTML += `<p class='answer-favorite'>"${inputQuestion.value}"<br>${favoriteAnswer}</p>`;
}
