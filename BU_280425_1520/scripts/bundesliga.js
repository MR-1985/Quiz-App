let currentQuestion = 0;
let rightAnswer = bundesligaQuestions['right_answer'];
let currentRightAnswers = 1;

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
}

function init() {
    getFromLocalStorage();
    showActualCountOfQuestion();
    showCountOfAllQuestions();
    showQuestion();
    showAnswers();
    disableNextButton();
    updateRightAnswersDisplay();
    setBackAllAfterReload();
};

function getFromLocalStorage(){
    let savedIndex = localStorage.getItem('currentQuestion');
    currentQuestion = savedIndex ? parseInt(savedIndex) : 0;

    let savedRightAnswers = localStorage.getItem('currentRightAnswers');
    currentRightAnswers = savedRightAnswers ? parseInt(savedRightAnswers) : 0;
};

function showActualCountOfQuestion() {
    let countRef = document.getElementById('count');
    countRef.innerHTML = currentQuestion + 1;
};

function showCountOfAllQuestions() {
    let allQuestionsRef = document.getElementById("all-questions");
    allQuestionsRef.innerHTML = bundesligaQuestions.length;
};

function showQuestion() {
    let question = bundesligaQuestions[currentQuestion];
    let questionRef = document.getElementById("question")
    questionRef.innerText = question['question']
};

function showAnswers() {
    let answerContainerRef = document.getElementById('answer-container');
    let question = bundesligaQuestions[currentQuestion];
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
    let question = bundesligaQuestions[currentQuestion];
    let rightAnswer = question['right_answer'];

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
    
    if (currentQuestion === bundesligaQuestions.length - 1) {
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
    possibleAnswers.innerHTML = bundesligaQuestions.length;
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

function nextQuestion() { 
    currentQuestion++;
    warnBeforeReload();
    localStorage.setItem('currentQuestion', currentQuestion);
    showQuestion();
    showAnswers();
    countUpCount();
    disableNextButton();
};

function countUpCount() {
    document.getElementById('count').innerText = currentQuestion + 1;
};


function rightAnswers(){
    currentRightAnswers++;
    localStorage.setItem('currentRightAnswers', currentRightAnswers);
    updateRightAnswersDisplay()
};

function updateRightAnswersDisplay() {
    let rightAnswersRef = document.getElementById('right-answers');
    rightAnswersRef.innerHTML = currentRightAnswers;
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
};