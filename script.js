// 1. Variables de Estado
let currentQuestionIndex = 0;
const userAnswers = [];

// 2. Captura de elementos del DOM
const heroSection = document.getElementById('hero-section');
const quizContainer = document.getElementById('quiz-container');
const resultsContainer = document.getElementById('results-container');
const btnStart = document.getElementById('btn-start');

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
    // Totales de diferencia acumulada
    let diffFlorAcero = 0;
    let diffReinaHielo = 0;
    let diffSirenaCaos = 0;

    // Calculamos la distancia vectorial en las 30 preguntas
    questionsData.forEach((question, index) => {
        const userVal = userAnswers[index];
        diffFlorAcero += Math.abs(userVal - question.perfiles.florAcero);
        diffReinaHielo += Math.abs(userVal - question.perfiles.reinaHielo);
        diffSirenaCaos += Math.abs(userVal - question.perfiles.sirenaCaos);
    });

    const maxDiff = 120; // 30 preguntas * 4 max desviacion

    // Convertimos las diferencias en % de Similitud
    const scores = [
        { key: 'florAcero', name: profileDetails.florAcero.title, match: Math.round((1 - (diffFlorAcero / maxDiff)) * 100) },
        { key: 'reinaHielo', name: profileDetails.reinaHielo.title, match: Math.round((1 - (diffReinaHielo / maxDiff)) * 100) },
        { key: 'sirenaCaos', name: profileDetails.sirenaCaos.title, match: Math.round((1 - (diffSirenaCaos / maxDiff)) * 100) }
    ];

    // Ordenamos de mayor a menor porcentaje de coincidencia
    scores.sort((a, b) => b.match - a.match);

    const winner = scores[0];       // El perfil principal (1er lugar)
    const secondary1 = scores[1];   // 2do lugar
    const secondary2 = scores[2];   // 3er lugar

    // Renderizamos los resultados en pantalla
    renderResults(winner, secondary1, secondary2);
}

// 8. Renderizar la Pantalla Final de Resultados
function renderResults(winner, sec1, sec2) {
    quizContainer.classList.add('hidden');
    resultsContainer.classList.remove('hidden');

    // Encabezado Principal
    resultTitle.textContent = `${winner.match}% ${winner.name}`;
    resultDescription.textContent = profileDetails[winner.key].description;

    // Sección de Perfiles Secundarios / Afines
    secondaryScores.innerHTML = `
        <hr class="results-divider">
        <p class="secondary-title">Matices de tu personalidad:</p>
        <div class="secondary-tags">
            <span class="tag">${sec1.match}% ${sec1.name}</span>
            <span class="tag">${sec2.match}% ${sec2.name}</span>
        </div>
    `;
}

// 9. Escuchadores de eventos
btnStart.addEventListener('click', startQuiz);

optionButtons.forEach(button => {
    button.addEventListener('click', handleOptionSelect);
});
