// 1. Variables de Estado de la Aplicación
let currentQuestionIndex = 0;
const userAnswers = [];

// 2. Captura de elementos del DOM
const heroSection = document.getElementById('hero-section');
const quizContainer = document.getElementById('quiz-container');
const btnStart = document.getElementById('btn-start');

const questionTextElement = document.getElementById('question-text');
const questionNumberElement = document.getElementById('question-number');
const progressBar = document.getElementById('progress-bar');
const optionButtons = document.querySelectorAll('.btn-option');

// 3. Función para iniciar el cuestionario
function startQuiz() {
    heroSection.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    
    // Reiniciar variables por si vuelve a jugar
    currentQuestionIndex = 0;
    userAnswers.length = 0;
    
    // Cargar la primera pregunta
    loadQuestion();
}

// 4. Función para renderizar la pregunta actual
function loadQuestion() {
    const currentQuestion = questionsData[currentQuestionIndex];
    
    // Actualizar el texto de la pregunta
    questionTextElement.textContent = currentQuestion.texto;
    
    // Actualizar el número de la pregunta ("Pregunta X de 30")
    questionNumberElement.textContent = `Pregunta ${currentQuestionIndex + 1} de ${questionsData.length}`;
    
    // Actualizar la barra de progreso
    const progressPercent = ((currentQuestionIndex + 1) / questionsData.length) * 100;
    progressBar.style.width = `${progressPercent}%`;
}

// 5. Función al seleccionar una opción (1 al 5)
function handleOptionSelect(event) {
    // Obtenemos el valor numérico del botón presionado (1, 2, 3, 4 o 5)
    const selectedValue = parseInt(event.target.getAttribute('data-value'));
    
    // Guardamos la respuesta del usuario
    userAnswers.push(selectedValue);
    console.log(`Pregunta ${currentQuestionIndex + 1} respondida con: ${selectedValue}`);
    
    // Avanzar a la siguiente pregunta
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questionsData.length) {
        loadQuestion();
    } else {
        console.log("¡Cuestionario completado! Respuestas finales:", userAnswers);
        // Aquí llamaremos más adelante a la función que calcula la distancia vectorial
        alert("¡Has terminado las 30 preguntas!");
    }
}

// 6. Escuchadores de eventos (Listeners)
btnStart.addEventListener('click', startQuiz);

// Asignar el evento 'click' a cada uno de los 5 botones Likert
optionButtons.forEach(button => {
    button.addEventListener('click', handleOptionSelect);
});
