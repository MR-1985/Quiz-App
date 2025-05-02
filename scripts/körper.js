let currentQuestion = 0;
let rightAnswer = bodyQuestions['right_answer'];
let currentRightAnswers = 1;
let audio_fail = new Audio('audio/fail.mp3');
let audio_success = new Audio('audio/success.mp3');
let audio_ok = new Audio('audio/ok.mp3');
let audio_results = new Audio('audio/results.mp3');

function toggleQuizChoice(){
    let showQuizChoiceRef = document.getElementById('showActualQuiz');
    let choiceQuizRef = document.getElementById('choiceQuiz');
    let cardRef = document.getElementById('card');
    showQuizChoiceRef.classList.toggle('d-none');
    choiceQuizRef.classList.toggle('d-none');
    cardRef.classList.toggle('bg-quiz-choice-background');
    choiceQuizRef.classList.toggle('bg-quiz-choice');
};

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
    allQuestionsRef.innerHTML = bodyQuestions.length;
};

function showQuestion() {
    let question = bodyQuestions[currentQuestion];
    let questionRef = document.getElementById("question")
    questionRef.innerText = question['question']

    let percent = (currentQuestion + 1) / bodyQuestions.length;
    percent = Math.round(percent *100);
    let progressStatus = document.getElementById('progress-bar');
    progressStatus.innerHTML = `${percent} %`;
    progressStatus.style = `width: ${percent}%;`;
};

function showAnswers() {
    let answerContainerRef = document.getElementById('answer-container');
    let question = bodyQuestions[currentQuestion];
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
    let question = bodyQuestions[currentQuestion];
    let rightAnswer = question['right_answer'];

    if (selectedAnswer == rightAnswer) {
        document.getElementById('card-' + selectedAnswer).classList.add('bg-success', 'text-white');
        rightAnswers();
        audio_success.play();
    } else {
        audio_fail.play();
        document.getElementById('card-' + selectedAnswer).classList.add('bg-danger', 'text-white');
        document.getElementById('card-' + rightAnswer).classList.add('bg-success', 'text-white');
    }
    disableAnswers();
    enableNextButton();
    localStorage.setItem('currentQuestion', currentQuestion);
    
    if (currentQuestion === bodyQuestions.length - 1) {
        let resultButton = document.getElementById('next-button');
        resultButton.innerText = "Zur Auswertung"
        resultButton.onclick = showQuizResult;
    }
};

function showQuizResult(){
    audio_results.play();
    document.getElementById('theEnd').innerHTML = overlayTemp();
    let rightDone = document.getElementById('rightDoneAnswers');
    let possibleAnswers = document.getElementById('allPossibleAnswers');
    let getRightCountOfAnswers = document.getElementById('right-answers');
    rightDone.innerHTML = getRightCountOfAnswers.textContent;
    possibleAnswers.innerHTML = bodyQuestions.length;
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
    audio_ok.play();
    localStorage.removeItem('currentQuestion');
    localStorage.removeItem('currentRightAnswers');
    goToHome();
};

function goToHome() {
    window.location.href = "index.html";
  };