function toggleQuizChoice(){
    let showQuizChoiceRef = document.getElementById('showActualQuiz');
    let choiceQuizRef = document.getElementById('choiceQuiz');
    let cardRef = document.getElementById('card');
    showQuizChoiceRef.classList.toggle('d-none');
    choiceQuizRef.classList.toggle('d-none');
    cardRef.classList.toggle('bg-quiz-choice-background');
    choiceQuizRef.classList.toggle('bg-quiz-choice');
};