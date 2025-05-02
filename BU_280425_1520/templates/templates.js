function showAnswersTemp(i, answerText) {
    return `
<div class="card answer-card" onclick="selectAnswer(${i})" id="card-${i}">
    <div class="card-body px-2 gap-1">
        <span id="answer${i}">${answerText}</span>
    </div>
</div>`
};

function overlayTemp() {
    return `<div id="overlay-container" class="w-100 bg-secondary-subtle position-absolute start-0" style="top: 50vh; height: 50vh; z-index: 1001; align-content: center;">
                <div id="overlay" class="d-flex flex-column justify-content-center align-items-center">
                    <h1>Ende des Quizzes</h1>
                    <br>
                    <div id="quizz-result">
                        <span>
                            Insgesamt
                            <span id="rightDoneAnswers"></span>
                            Antworten von
                            <span id="allPossibleAnswers"></span>
                            richtig
                        </span>
                        <button class="btn btn-primary" id="restart-button" onclick="restartQuiz()">Neustart</button>
                    </div>
                </div>
            </div>`
};

function activateChoiceTemp() {
    return`<div>
    <li><a class="btn btn-primary mb-1" href="./bundesliga.html">Bundesliga</a></li>
    <li><a class="btn btn-primary mb-1" href="./menschkörper.html">Der menschliche Körper</a></li>
    <li><a class="btn btn-primary mb-1" href="./webdeveloping.html">Webdesign</a></li>
    <li><a class="btn btn-primary mb-1" href="./tiere.html">Tiere</a></li>
    </div>`
};

function deactivateChoiceTemp(){
    return`<div class="card">
        <div class="card-body" id="choose-quiz">
            <h1>Quiz-App - Allgemein</h1>
        </div>`
};