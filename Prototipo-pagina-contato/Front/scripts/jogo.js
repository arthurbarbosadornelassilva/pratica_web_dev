const questions = [
    {
        question: "Qual é a capital da França?",
        options: ["Londres", "Madri", "Paris", "Berlim"],
        answer: 2
    },
    {
        question: "Qual é o maior planeta do Sistema Solar?",
        options: ["Terra", "Júpiter", "Marte", "Saturno"],
        answer: 1
    },
    {
        question: "Quem pintou a Mona Lisa?",
        options: ["Van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
        answer: 1
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    document.getElementById('quiz-container').style.display = 'block';
    document.getElementById('result-container').style.display = 'none';

    const questionElement = document.getElementById('question');
    const options = document.getElementsByClassName('option');
    
    questionElement.textContent = questions[currentQuestion].question;
    for (let i = 0; i < options.length; i++) {
        options[i].textContent = questions[currentQuestion].options[i];
    }
    
    // document.getElementById('score').textContent = `Pontuação: ${score}`;
    document.getElementById('next-btn').style.display = 'none';
}

function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestion].answer;
    if (selectedOption === correctAnswer) {
        alert('Correto!');
        score++;
    } else {
        alert('Errado!');
    }
    document.getElementById('next-btn').style.display = 'block';
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';
    document.getElementById('final-score').textContent = `Sua pontuação final é: ${score} de ${questions.length}`;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    loadQuestion();
}

// Carrega a primeira questão ao abrir a página
window.onload = loadQuestion;