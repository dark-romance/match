// 1. Variables de Estado
let currentQuestionIndex = 0;
const userAnswers = [];

// 2. Captura de elementos del DOM
const heroSection = document.getElementById('hero-section');
const quizContainer = document.getElementById('quiz-container');
const resultsContainer = document.getElementById('results-container');

const btnStart = document.getElementById('btn-start');
const btnCloseResults = document.getElementById('btn-close-results'); // Botón (X)

const questionTextElement = document.getElementById('question-text');
const questionNumberElement = document.getElementById('question-number');
const progressBar = document.getElementById('progress-bar');
const optionButtons = document.querySelectorAll('.btn-option');

// Elementos de la pantalla de resultados
const resultTitle = document.getElementById('result-title');
const resultDescription = document.getElementById('result-description');
const secondaryScores = document.getElementById('secondary-scores');

// 3. Descripciones provisionales de los Perfiles
const profileDetails = {
    reinaHielo: {
        title: "Reina de Hielo",
        description: "Controlada, analítica y metodológica. Mantienes la calma en medio del caos y exiges orden y respeto en tus relaciones. Nada queda al azar en tu mundo."
    },
    florAcero: {
        title: "Flor de Acero",
        description: "Profundamente leal, protectora y empática, pero con unos límites inquebrantables. Cuidas el corazón de quienes amas con una devoción inamovible."
    },
    sirenaCaos: {
        title: "Sirena del Caos",
        description: "Vibrante, apasionada e impredecible. Te atrae la intensidad, el choque de personalidades y la adrenalina de una historia de amor sin reglas ni ataduras."
    }
};

// 4. Iniciar el Cuestionario
function startQuiz() {
    heroSection.classList.add('hidden');
    resultsContainer.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    
    currentQuestionIndex = 0;
    userAnswers.length = 0;
    
    loadQuestion();
}

// 5. Cargar Pregunta
function loadQuestion() {
    const currentQuestion = questionsData[currentQuestionIndex];
    questionTextElement.textContent = currentQuestion.texto;
    questionNumberElement.textContent = `Pregunta ${currentQuestionIndex + 1} de ${questionsData.length}`;
    
    const progressPercent = ((currentQuestionIndex + 1) / questionsData.length) * 100;
    progressBar.style.width = `${progressPercent}%`;
}

// 6. Capturar Respuesta
function handleOptionSelect(event) {
    const selectedValue = parseInt(event.target.getAttribute('data-value'));
    userAnswers.push(selectedValue);
    
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questionsData.length) {
        loadQuestion();
    } else {
        calculateAndShowResults();
    }
}

// 7. Lógica Matemática del Perfil Psicométrico
function calculateAndShowResults() {
    let diffFlorAcero = 0;
    let diffReinaHielo = 0;
    let diffSirenaCaos = 0;

    questionsData.forEach((question, index) => {
        const userVal = userAnswers[index];
        diffFlorAcero += Math.abs(userVal - question.perfiles.florAcero);
        diffReinaHielo += Math.abs(userVal - question.perfiles.reinaHielo);
        diffSirenaCaos += Math.abs(userVal - question.perfiles.sirenaCaos);
    });

    const maxDiff = 120; // 30 preguntas * 4 max desviacion

    const scores = [
        { key: 'florAcero', name: profileDetails.florAcero.title, match: Math.round((1 - (diffFlorAcero / maxDiff)) * 100) },
        { key: 'reinaHielo', name: profileDetails.reinaHielo.title, match: Math.round((1 - (diffReinaHielo / maxDiff)) * 100) },
        { key: 'sirenaCaos', name: profileDetails.sirenaCaos.title, match: Math.round((1 - (diffSirenaCaos / maxDiff)) * 100) }
    ];

    scores.sort((a, b) => b.match - a.match);

    renderResults(scores[0], scores[1], scores[2]);
}

// 8. Renderizar la Pantalla Final de Resultados
function renderResults(winner, sec1, sec2) {
    quizContainer.classList.add('hidden');
    resultsContainer.classList.remove('hidden');

    resultTitle.textContent = `${winner.match}% ${winner.name}`;
    resultDescription.textContent = profileDetails[winner.key].description;

    secondaryScores.innerHTML = `
        <hr class="results-divider">
        <p class="secondary-title">Matices de tu personalidad:</p>
        <div class="secondary-tags">
            <span class="tag">${sec1.match}% ${sec1.name}</span>
            <span class="tag">${sec2.match}% ${sec2.name}</span>
        </div>
    `;
}

// 9. Función para cerrar la tarjeta de resultados y regresar a la portada
function closeResults() {
    resultsContainer.classList.add('hidden');
    heroSection.classList.remove('hidden');
}

// 10. Escuchadores de eventos (Listeners)
btnStart.addEventListener('click', startQuiz);

optionButtons.forEach(button => {
    button.addEventListener('click', handleOptionSelect);
});

// Listener para el botón (X) de salida
if (btnCloseResults) {
    btnCloseResults.addEventListener('click', closeResults);
}
