<<<<<<< HEAD
function showAnswersTemp(i, answerText) {
    return `
=======
function showAnswersTemp(i, answerText){
return `
>>>>>>> 8c1a870738c03d5ff2c399eb9d9177aae52d1bc3
<div class="card answer-card" onclick="selectAnswer(${i})" id="card-${i}">
    <div class="card-body px-2 gap-1">
        <span id="answer${i}">${answerText}</span>
    </div>
</div>`
};
<<<<<<< HEAD

function overlayTemp() {
    return `<div id="overlay-container" class="w-100".bg-secondary-subtle>
                <div id="overlay" class="d-flex flex-column justify-content-center align-items-center">
                    <h1>Ende des Quizzes</h1>
                
                <div id="quizz-result">
                    <span>
                        Insgesamt
                        <span id="rightDoneAnswers"></span>
                        Antworten von
                        <span id="allPossibleAnswers"></span>
                        richtig
                    </span>
                    </div>
                </div>
            </div>`
};
=======
>>>>>>> 8c1a870738c03d5ff2c399eb9d9177aae52d1bc3
