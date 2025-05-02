let currentQuestion = 0;
let rightAnswer = questions['right_answer'];
let currentRightAnswers = 1;
<<<<<<< HEAD

let alreadyChoosen = false;
document.getElementById("choose-quiz-button").addEventListener('click', () => {
  if (!alreadyChoosen) {
    activateChoice();
  } else {
    deactivateChoice();
  }
  alreadyChoosen = !alreadyChoosen;
});

function activateChoice(){
    let chooseQuiz = document.getElementById('choose-quiz');
    chooseQuiz.innerHTML = activateChoiceTemp();
};

function deactivateChoice(){
    let chooseQuiz = document.getElementById('choose-quiz');
    chooseQuiz.innerHTML = deactivateChoiceTemp();
};


=======
let maxReachedQuestion = 0;
>>>>>>> 8c1a870738c03d5ff2c399eb9d9177aae52d1bc3

function init() {
    getFromLocalStorage();
    showActualCountOfQuestion();
    showCountOfAllQuestions();
    showQuestion();
    showAnswers();
    disableNextButton();
    updateRightAnswersDisplay();
<<<<<<< HEAD
    setBackAllAfterReload();
=======
>>>>>>> 8c1a870738c03d5ff2c399eb9d9177aae52d1bc3
};

function getFromLocalStorage(){
    let savedIndex = localStorage.getItem('currentQuestion');
    currentQuestion = savedIndex ? parseInt(savedIndex) : 0;

    let savedRightAnswers = localStorage.getItem('currentRightAnswers');
    currentRightAnswers = savedRightAnswers ? parseInt(savedRightAnswers) : 0;
<<<<<<< HEAD
=======

    let savedMaxReached = localStorage.getItem('maxReachedQuestion');
    maxReachedQuestion = savedMaxReached ? parseInt(savedMaxReached) : currentQuestion;
>>>>>>> 8c1a870738c03d5ff2c399eb9d9177aae52d1bc3
};

function showActualCountOfQuestion() {
    let countRef = document.getElementById('count');
    countRef.innerHTML = currentQuestion + 1;
};

function showCountOfAllQuestions() {
    let allQuestionsRef = document.getElementById("all-questions");
    allQuestionsRef.innerHTML = questions.length;
};

function showQuestion() {
    let question = questions[currentQuestion];
    let questionRef = document.getElementById("question")
    questionRef.innerText = question['question']
};

function showAnswers() {
    let answerContainerRef = document.getElementById('answer-container');
    let question = questions[currentQuestion];
    answerContainerRef.innerHTML = '';
    for (let i = 1; i <= 4; i++) {
        let answerText = question[`answer_${i}`];
        answerContainerRef.innerHTML += showAnswersTemp(i, answerText);
    }
};

function disableNextButton() {
    let nextButtonRef = document.getElementById('next-button');
    nextButtonRef.disabled = true;
};
//---------End-of-init()-----------------------------------------------------------------------------

function selectAnswer(selectedAnswer) {
    let question = questions[currentQuestion];
    let rightAnswer = question['right_answer'];
<<<<<<< HEAD

=======
>>>>>>> 8c1a870738c03d5ff2c399eb9d9177aae52d1bc3
    if (selectedAnswer == rightAnswer) {
        document.getElementById('card-' + selectedAnswer).classList.add('bg-success', 'text-white');
        rightAnswers();
    } else {
        document.getElementById('card-' + selectedAnswer).classList.add('bg-danger', 'text-white');
        document.getElementById('card-' + rightAnswer).classList.add('bg-success', 'text-white');
    }
    disableAnswers();
    enableNextButton();
    localStorage.setItem('currentQuestion', currentQuestion);
<<<<<<< HEAD
    
    if (currentQuestion === questions.length - 1) {
        let resultButton = document.getElementById('next-button');
        resultButton.innerText = "Zur Auswertung"
        resultButton.onclick = showQuizResult;
    }
};

function showQuizResult(){
    document.getElementById('theEnd').innerHTML = overlayTemp();
    let rightDone = document.getElementById('rightDoneAnswers');
    let possibleAnswers = document.getElementById('allPossibleAnswers');
    let getRightCountOfAnswers = document.getElementById('right-answers');
    rightDone.innerHTML = getRightCountOfAnswers.textContent;
    possibleAnswers.innerHTML = questions.length;
=======
>>>>>>> 8c1a870738c03d5ff2c399eb9d9177aae52d1bc3
};

function disableAnswers() {
    let cards = document.querySelectorAll('.answer-card');
    cards.forEach(card => {
        card.style.pointerEvents = 'none'
    })
};

function enableNextButton() {
    let nextButtonRef = document.getElementById('next-button');
    nextButtonRef.disabled = false;
};

<<<<<<< HEAD
function nextQuestion() { 
    currentQuestion++;
    warnBeforeReload();
=======
function nextQuestion() {
    currentQuestion++;
    if (currentQuestion > maxReachedQuestion) {
        maxReachedQuestion = currentQuestion;
        localStorage.setItem('maxReachedQuestion', maxReachedQuestion);
    }
    // let savedRightAnswers = localStorage.getItem('currentRightAnswers');
    // currentRightAnswers = savedRightAnswers ? parseInt(currentRightAnswers) : 0;

>>>>>>> 8c1a870738c03d5ff2c399eb9d9177aae52d1bc3
    localStorage.setItem('currentQuestion', currentQuestion);
    showQuestion();
    showAnswers();
    countUpCount();
    disableNextButton();
<<<<<<< HEAD
=======
    toggleBackButton()
};

function toggleBackButton() {
    let backButton = document.getElementById('back-button');
    if (currentQuestion > 0) {
        backButton.classList.remove('d-none');
    } else {
        backButton.classList.add('d-none');
    }
>>>>>>> 8c1a870738c03d5ff2c399eb9d9177aae52d1bc3
};

function countUpCount() {
    document.getElementById('count').innerText = currentQuestion + 1;
};
<<<<<<< HEAD
//     if (currentQuestion > 0 && currentQuestion <= maxReachedQuestion) {
//         currentQuestion--;
//         localStorage.setItem('currentQuestion', currentQuestion);
//         countDownCount();
//         showQuestion();
//         showAnswers();
//         disableNextButton();
//         toggleBackButton();
//         disableAnswers();
//         enableNextButton();
//         window.addEventListener('beforeunload', function (e) {
//             e.preventDefault();
//         });
//     } else{
//         alert('Du bist bei Frage 1 angelangt!')
//     }
// };

// function countDownCount() {
//     document.getElementById('count').innerText = currentQuestion + 1;
// };
=======

function prevQuestion(){
    if (currentQuestion > 0 && currentQuestion <= maxReachedQuestion) {
        currentQuestion--;
        localStorage.setItem('currentQuestion', currentQuestion);
        countDownCount();
        showQuestion();
        showAnswers();
        disableNextButton();
        toggleBackButton();
        disableAnswers();
        enableNextButton();
        window.addEventListener('beforeunload', function (e) {
            e.preventDefault();
        });
    } else{
        alert('Du bist bei Frage 1 angelangt!')
    }
};

function countDownCount() {
    document.getElementById('count').innerText = currentQuestion + 1;
};
>>>>>>> 8c1a870738c03d5ff2c399eb9d9177aae52d1bc3

function rightAnswers(){
    currentRightAnswers++;
    localStorage.setItem('currentRightAnswers', currentRightAnswers);
    updateRightAnswersDisplay()
};

function updateRightAnswersDisplay() {
    let rightAnswersRef = document.getElementById('right-answers');
    rightAnswersRef.innerHTML = currentRightAnswers;
<<<<<<< HEAD
};

function setBackAllAfterReload(){
    window.addEventListener('beforeunload', function () {
        localStorage.removeItem('currentQuestion');
        localStorage.removeItem('currentRightAnswers');
    });
};

function warnBeforeReload(){
    window.addEventListener('beforeunload', function (e) {
        e.preventDefault();
    });
};

function restartQuiz() {
    localStorage.removeItem('currentQuestion');
    localStorage.removeItem('currentRightAnswers');
    location.reload();
=======
>>>>>>> 8c1a870738c03d5ff2c399eb9d9177aae52d1bc3
};