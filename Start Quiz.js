const questions = [
    {
        question: "Which is largest animal in the world?",
        answers: [
            {text: "Shark" ,correct: "false"},
            {text: "Blue Whale" ,correct: "true"},
            {text: "Tiger" ,correct: "false"},
            {text: "Giraffe" ,correct: "false"},
        ]
    },
    {
        question: "What is the national bird of India? ",
        answers: [
            {text: "Pigeon" ,correct: "false"},
            {text: "Peacock" ,correct: "true"},
            {text: "Parrot" ,correct: "false"},
            {text: "Pineapple" ,correct: "false"},
        ]
    },
    {
        question: "Which is largest ocean in the world?",
        answers: [
            {text: "Atlantic ocean" ,correct: "false"},
            {text: "Pacific ocean" ,correct: "true"},
            {text: "Nepal" ,correct: "false"},
            {text: "Sikkim" ,correct: "false"},
        ]
    },
    {
        question: "Which country won thh 2011 cricket worldcup?",
        answers: [
            {text: "Australia" ,correct: "false"},
            {text: "India" ,correct: "true"},
            {text: "Bangladesh" ,correct: "false"},
            {text: "Srilanka" ,correct: "false"},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex= 0 ;
let score= 0 ;

function startQuiz(){
    currentQuestionIndex= 0 ;
    score= 0 ;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        nextButton.style.display = "block";
    });
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}


nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});


startQuiz();