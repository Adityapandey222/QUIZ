const quizData = {
    'GK': [
        { question: 'Who is the president of the USA?', options: ['A. John Doe', 'B. Jane Doe', 'C. Joe Biden'], answer: 'C' },
        { question: 'What is the capital of Japan?', options: ['A. Tokyo', 'B. Beijing', 'C. Seoul'], answer: 'A' },
        { question: 'Who wrote "Romeo and Juliet"?', options: ['A. Charles Dickens', 'B. William Shakespeare', 'C. Jane Austen'], answer: 'B' },
        { question: 'What is the largest mammal?', options: ['A. Elephant', 'B. Blue Whale', 'C. Giraffe'], answer: 'B' },
        { question: 'In which year did World War II end?', options: ['A. 1943', 'B. 1945', 'C. 1950'], answer: 'B' },
    ],
    'English': [
        { question: 'Who wrote "To Kill a Mockingbird"?', options: ['A. J.K. Rowling', 'B. Harper Lee', 'C. George Orwell'], answer: 'B' },
        { question: 'What is the plural of "child"?', options: ['A. Childrens', 'B. Childs', 'C. Children'], answer: 'C' },
        { question: 'Who is the author of "1984"?', options: ['A. George Orwell', 'B. Aldous Huxley', 'C. Ray Bradbury'], answer: 'A' },
        { question: 'What is a synonym for "plethora"?', options: ['A. Scarcity', 'B. Abundance', 'C. Shortage'], answer: 'B' },
        { question: 'Which Shakespeare play features the character Othello?', options: ['A. Macbeth', 'B. Othello', 'C. Romeo and Juliet'], answer: 'B' },
    ],
    'Sports': [
        { question: 'In which country did the sport of tennis originate?', options: ['A. France', 'B. England', 'C. Italy'], answer: 'A' },
        { question: 'How many players are there on a standard soccer team?', options: ['A. 8', 'B. 10', 'C. 11'], answer: 'C' },
        { question: 'Which sport is known as the "king of sports"?', options: ['A. Cricket', 'B. Soccer', 'C. Golf'], answer: 'A' },
        { question: 'In which year did the first modern Olympic Games take place?', options: ['A. 1886', 'B. 1896', 'C. 1906'], answer: 'B' },
        { question: 'What is the scoring term used in golf?', options: ['A. Touchdown', 'B. Hole-in-one', 'C. Slam Dunk'], answer: 'B' },
    ],
    'Science': [
        { question: 'What is the chemical symbol for water?', options: ['A. Wt', 'B. H2O', 'C. O2'], answer: 'B' },
        { question: 'Which planet is known as the Red Planet?', options: ['A. Mars', 'B. Venus', 'C. Jupiter'], answer: 'A' },
        { question: 'What is the powerhouse of the cell?', options: ['A. Nucleus', 'B. Mitochondria', 'C. Ribosome'], answer: 'B' },
        { question: 'Who developed the theory of general relativity?', options: ['A. Isaac Newton', 'B. Albert Einstein', 'C. Galileo Galilei'], answer: 'B' },
        { question: 'What is the smallest bone in the human body?', options: ['A. Stapes', 'B. Femur', 'C. Tibia'], answer: 'A' },
    ],
    'History': [
        { question: 'Who was the first President of the United States?', options: ['A. John Adams', 'B. George Washington', 'C. Thomas Jefferson'], answer: 'B' },
        { question: 'In which year did Christopher Columbus reach the Americas?', options: ['A. 1492', 'B. 1500', 'C. 1600'], answer: 'A' },
        { question: 'Which ancient civilization built the pyramids in Egypt?', options: ['A. Greeks', 'B. Romans', 'C. Egyptians'], answer: 'C' },
        { question: 'Who wrote "The Communist Manifesto" along with Karl Marx?', options: ['A. Friedrich Engels', 'B. Vladimir Lenin', 'C. Joseph Stalin'], answer: 'A' },
        { question: 'What event marked the beginning of World War I?', options: ['A. Assassination of Archduke Franz Ferdinand', 'B. Treaty of Versailles', 'C. Battle of Jutland'], answer: 'A' },
    ],
    'Geography': [
        { question: 'Which river is the longest in the world?', options: ['A. Amazon', 'B. Nile', 'C. Yangtze'], answer: 'B' },
        { question: 'What is the capital city of Australia?', options: ['A. Sydney', 'B. Canberra', 'C. Melbourne'], answer: 'B' },
        { question: 'Which mountain range separates Europe and Asia?', options: ['A. Rocky Mountains', 'B. Alps', 'C. Ural Mountains'], answer: 'C' },
        { question: 'Which country is known as the Land of the Rising Sun?', options: ['A. China', 'B. Japan', 'C. South Korea'], answer: 'B' },
        { question: 'In which ocean is the Bermuda Triangle located?', options: ['A. Atlantic Ocean', 'B. Indian Ocean', 'C. Pacific Ocean'], answer: 'A' },
    ],
    'CurrentAffairs': [
        { question: 'Who is the current Secretary-General of the United Nations?', options: ['A. Angela Merkel', 'B. António Guterres', 'C. Emmanuel Macron'], answer: 'B' },
        { question: 'In which year did the Paris Agreement on climate change come into force?', options: ['A. 2015', 'B. 2016', 'C. 2017'], answer: 'A' },
        { question: 'Which country hosted the 2020 Summer Olympics?', options: ['A. Japan', 'B. China', 'C. Brazil'], answer: 'A' },
        { question: 'Who won the Nobel Peace Prize in 2021?', options: ['A. Greta Thunberg', 'B. Malala Yousafzai', 'C. World Food Programme'], answer: 'C' },
        { question: 'What is the capital of Afghanistan?', options: ['A. Tehran', 'B. Islamabad', 'C. Kabul'], answer: 'C' },
    ],
    'Films': [
        { question: 'Who directed the movie "The Shawshank Redemption"?', options: ['A. Steven Spielberg', 'B. Christopher Nolan', 'C. Frank Darabont'], answer: 'C' },
        { question: 'Which film won the Academy Award for Best Picture in 2020?', options: ['A. Parasite', 'B. 1917', 'C. Nomadland'], answer: 'C' },
        { question: 'Who played the role of Tony Stark/Iron Man in the Marvel Cinematic Universe?', options: ['A. Chris Hemsworth', 'B. Chris Evans', 'C. Robert Downey Jr.'], answer: 'C' },
        { question: 'In which film did Heath Ledger play the Joker?', options: ['A. The Dark Knight', 'B. Inception', 'C. Brokeback Mountain'], answer: 'A' },
        { question: 'Which animated film features a character named Simba?', options: ['A. Shrek', 'B. The Lion King', 'C. Finding Nemo'], answer: 'B' },
    ],
    'Music': [
        { question: 'Who is known as the "King of Pop"?', options: ['A. Elvis Presley', 'B. Michael Jackson', 'C. Madonna'], answer: 'B' },
        { question: 'Which band released the album "Abbey Road"?', options: ['A. The Rolling Stones', 'B. The Beatles', 'C. Led Zeppelin'], answer: 'B' },
        { question: 'Who is the lead singer of the band Queen?', options: ['A. Freddie Mercury', 'B. John Lennon', 'C. David Bowie'], answer: 'A' },
        { question: 'In which decade did the punk rock movement emerge?', options: ['A. 1960s', 'B. 1970s', 'C. 1980s'], answer: 'B' },
        { question: 'Which artist released the hit single "Shape of You"?', options: ['A. Ed Sheeran', 'B. Adele', 'C. Taylor Swift'], answer: 'A' },
    ], 
};

const questionDuration = 10;
let currentCategory;
let currentQuestionIndex;
let timer;
let score = 0;

function startQuiz() {
    currentCategory = document.getElementById('category').value;
    currentQuestionIndex = 0;
    score = 0;

    document.getElementById('category-selection').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';

    loadQuestion();
    startTimer();
}

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');

    const currentQuestion = quizData[currentCategory][currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    optionsElement.innerHTML = '';

    currentQuestion.options.forEach((option, index) => {
        const optionButton = document.createElement('button');
        optionButton.textContent = option;
        optionButton.onclick = () => selectOption(option, index);
        optionsElement.appendChild(optionButton);
    });
}

function startTimer() {
    let timeRemaining = questionDuration;

    timer = setInterval(() => {
        document.getElementById('timer').textContent = Time: ${timeRemaining}s;

        if (timeRemaining <= 0) {
            clearInterval(timer);
            selectOption('', -1); // No option selected, treat as timeout
        }

        timeRemaining--;
    }, 1000);
}

function selectOption(selectedOption, optionIndex) {
    clearInterval(timer);

    const currentQuestion = quizData[currentCategory][currentQuestionIndex];
    const isCorrect = selectedOption.includes(currentQuestion.answer);

    if (isCorrect) {
        score++;
    }

    // Highlight the selected option
    document.querySelectorAll('#options button').forEach((button, index) => {
        button.style.backgroundColor = index === optionIndex ? (isCorrect ? '#2ecc71' : '#e74c3c') : '';
    });

    currentQuestionIndex++;

    if (currentQuestionIndex < quizData[currentCategory].length) {
        setTimeout(() => {
            loadQuestion();
            startTimer();
        }, 1000); // Delay before loading the next question for better user experience
    } else {
        endQuiz();
    }
}

function endQuiz() {
    clearInterval(timer);
    alert(Quiz completed!\nYour Score: ${score} out of ${quizData[currentCategory].length});
}
const quizData = {
    'GK': [
        { question: 'Who is the president of the USA?', options: ['A. John Doe', 'B. Jane Doe', 'C. Joe Biden'], answer: 'C' },
        { question: 'What is the capital of Japan?', options: ['A. Tokyo', 'B. Beijing', 'C. Seoul'], answer: 'A' },
        { question: 'Who wrote "Romeo and Juliet"?', options: ['A. Charles Dickens', 'B. William Shakespeare', 'C. Jane Austen'], answer: 'B' },
        { question: 'What is the largest mammal?', options: ['A. Elephant', 'B. Blue Whale', 'C. Giraffe'], answer: 'B' },
        { question: 'In which year did World War II end?', options: ['A. 1943', 'B. 1945', 'C. 1950'], answer: 'B' },
    ],
    'English': [
        { question: 'Who wrote "To Kill a Mockingbird"?', options: ['A. J.K. Rowling', 'B. Harper Lee', 'C. George Orwell'], answer: 'B' },
        { question: 'What is the plural of "child"?', options: ['A. Childrens', 'B. Childs', 'C. Children'], answer: 'C' },
        { question: 'Who is the author of "1984"?', options: ['A. George Orwell', 'B. Aldous Huxley', 'C. Ray Bradbury'], answer: 'A' },
        { question: 'What is a synonym for "plethora"?', options: ['A. Scarcity', 'B. Abundance', 'C. Shortage'], answer: 'B' },
        { question: 'Which Shakespeare play features the character Othello?', options: ['A. Macbeth', 'B. Othello', 'C. Romeo and Juliet'], answer: 'B' },
    ],
    'Sports': [
        { question: 'In which country did the sport of tennis originate?', options: ['A. France', 'B. England', 'C. Italy'], answer: 'A' },
        { question: 'How many players are there on a standard soccer team?', options: ['A. 8', 'B. 10', 'C. 11'], answer: 'C' },
        { question: 'Which sport is known as the "king of sports"?', options: ['A. Cricket', 'B. Soccer', 'C. Golf'], answer: 'A' },
        { question: 'In which year did the first modern Olympic Games take place?', options: ['A. 1886', 'B. 1896', 'C. 1906'], answer: 'B' },
        { question: 'What is the scoring term used in golf?', options: ['A. Touchdown', 'B. Hole-in-one', 'C. Slam Dunk'], answer: 'B' },
    ],
};

const questionDuration = 10;
let currentCategory;
let currentQuestionIndex;
let timer;
let score = 0;

function startQuiz() {
    currentCategory = document.getElementById('category').value;
    currentQuestionIndex = 0;
    score = 0;

    document.getElementById('category-selection').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';

    loadQuestion();
    startTimer();
}

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');

    const currentQuestion = quizData[currentCategory][currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    optionsElement.innerHTML = '';

    currentQuestion.options.forEach((option, index) => {
        const optionButton = document.createElement('button');
        optionButton.textContent = option;
        optionButton.onclick = () => selectOption(option, index);
        optionsElement.appendChild(optionButton);
    });
}

function startTimer() {
    let timeRemaining = questionDuration;

    document.getElementById('timer').textContent = Time: ${timeRemaining}s;

    timer = setInterval(() => {
        timeRemaining--;

        document.getElementById('timer').textContent = Time: ${timeRemaining}s;

        if (timeRemaining < 0) {
            clearInterval(timer);
            selectOption('', -1); // No option selected, treat as timeout
        }
    }, 1000);
}

function selectOption(selectedOption, optionIndex) {
    clearInterval(timer);

    const currentQuestion = quizData[currentCategory][currentQuestionIndex];
    const isCorrect = selectedOption.includes(currentQuestion.answer);

    if (isCorrect) {
        score++;
    }

    // Highlight the selected option
    document.querySelectorAll('#options button').forEach((button, index) => {
        button.style.backgroundColor = index === optionIndex ? (isCorrect ? '#2ecc71' : '#e74c3c') : '';
    });

    currentQuestionIndex++;

    if (currentQuestionIndex < quizData[currentCategory].length) {
        setTimeout(() => {
            loadQuestion();
            startTimer();
        }, 1000); // Delay before loading the next question for better user experience
    } else {
        endQuiz();
    }
}

function endQuiz() {
    clearInterval(timer);
    alert(Quiz completed!\nYour Score: ${score} out of ${quizData[currentCategory].length});
}