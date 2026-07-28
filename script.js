// 1. Variables de Estado
let currentQuestionIndex = 0;
const userAnswers = [];

// 2. Captura de elementos del DOM
const heroSection = document.getElementById('hero-section');
const quizContainer = document.getElementById('quiz-container');
const resultsContainer = document.getElementById('results-container');

const btnStart = document.getElementById('btn-start');
const btnCloseQuiz = document.getElementById('btn-close-quiz');
const btnCloseResults = document.getElementById('btn-close-results');

const questionTextElement = document.getElementById('question-text');
const questionNumberElement = document.getElementById('question-number');
const progressBar = document.getElementById('progress-bar');
const optionButtons = document.querySelectorAll('.btn-option');

// Elementos de resultados
const resultTitle = document.getElementById('result-title');
const resultDescription = document.getElementById('result-description');
const secondaryScores = document.getElementById('secondary-scores');

// 3. Descripciones de los Perfiles
const profileDetails = {
    reinaHielo: {
        title: "Reina de Hielo",
        description: "Para ti el azar no existe: mientras el mundo se desmorona en caos, tú mantienes la calma, la elegancia y la mente fría. No eres difícil de alcanzar, simplemente exiges un respeto y una lealtad que casi nadie sabe ofrecer. Pero detrás de tu estructura impenetrable, solo un intelecto a tu altura sabrá descifrar tu devoción."
    },
    florAcero: {
        title: "Flor de Acero",
        description: "Pocas almas entienden la magia que habita en ti: un corazón capaz de entregarse con una lealtad absoluta, pero resguardado tras fronteras de acero que nadie logra romper. No buscas un amor a medias, sino a alguien dispuesto a cuidar de tu vulnerabilidad con esa misma devoción inamovible. Tu belleza es suave, pero tu raíz es indestructible."
    },
    sirenaCaos: {
        title: "Sirena del Caos",
        description: "Naciste para las aguas profundas: tus corrientes son cambiantes, impredecibles y salvajes por naturaleza. No le temes al peligro ni al choque de voluntades; te atrae el fuego, la adrenalina y la pasión que rompe cualquier regla. Quienes no saben nadar te llaman tormenta, pero tu canto solo busca arrastrar al capitán correcto hacia el abismo de tu entrega."
    }
};

// 4. Iniciar Cuestionario
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
    const button = event.currentTarget || event.target.closest('.btn-option');
    if (!button) return;
    
    const selectedValue = parseInt(button.getAttribute('data-value'), 10);
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

    // Máxima diferencia dinámica (30 preguntas * 4 = 120)
    const maxDiff = questionsData.length * 4;

    // Cálculo base de match
    let rawScores = [
        { key: 'florAcero', name: profileDetails.florAcero.title, match: Math.round((1 - (diffFlorAcero / maxDiff)) * 100) },
        { key: 'reinaHielo', name: profileDetails.reinaHielo.title, match: Math.round((1 - (diffReinaHielo / maxDiff)) * 100) },
        { key: 'sirenaCaos', name: profileDetails.sirenaCaos.title, match: Math.round((1 - (diffSirenaCaos / maxDiff)) * 100) }
    ];

    // Ordenar de mayor a menor
    rawScores.sort((a, b) => b.match - a.match);

    const winner = rawScores[0];
    let sec1 = rawScores[1];
    let sec2 = rawScores[2];

    // Ajuste de marketing: Si el ganador es un perfil dominante (>= 85%), 
    // atenuamos los secundarios para que el ganador destaque con autoridad y no diluya el engagement.
    if (winner.match >= 85) {
        sec1.match = Math.round(sec1.match * 0.45);
        sec2.match = Math.round(sec2.match * 0.40);
    }

    renderResults(winner, sec1, sec2);
}

// 8. Renderizar Pantalla Final de Resultados
function renderResults(winner, sec1, sec2) {
    quizContainer.classList.add('hidden');
    resultsContainer.classList.remove('hidden');

    // Título dinámico
    resultTitle.innerHTML = `<span class="result-subtitle">Tu arquetipo es:</span><br>${winner.match}% ${winner.name}`;
    resultDescription.textContent = profileDetails[winner.key].description;

    // Bloque dinámico de resonancia secundaria
    secondaryScores.innerHTML = `
        <hr class="results-divider">
        <p class="secondary-title">Resonancia con otros arquetipos:</p>
        <div class="secondary-tags">
            <span class="tag">${sec1.match}% ${sec1.name}</span>
            <span class="tag-divider">•</span>
            <span class="tag">${sec2.match}% ${sec2.name}</span>
        </div>
    `;
}

// 9. Cancelar Test / Cerrar Resultados
function resetToHome() {
    quizContainer.classList.add('hidden');
    resultsContainer.classList.add('hidden');
    heroSection.classList.remove('hidden');
}

// 10. Escuchadores de Eventos
btnStart.addEventListener('click', startQuiz);

if (btnCloseQuiz) {
    btnCloseQuiz.addEventListener('click', resetToHome);
}

if (btnCloseResults) {
    btnCloseResults.addEventListener('click', resetToHome);
}

optionButtons.forEach(button => {
    button.addEventListener('click', handleOptionSelect);
});
