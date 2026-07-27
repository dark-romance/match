// 1. Captura de elementos del DOM
const heroSection = document.getElementById('hero-section');
const quizContainer = document.getElementById('quiz-container');
const btnStart = document.getElementById('btn-start');

// 2. Función para iniciar el cuestionario
function startQuiz() {
    // Ocultamos la portada agregando la clase 'hidden'
    heroSection.classList.add('hidden');
    
    // Mostramos la sección del cuestionario quitando la clase 'hidden'
    quizContainer.classList.remove('hidden');
    
    console.log("El cuestionario ha comenzado con éxito.");
}

// 3. Escuchador de eventos (Event Listener)
btnStart.addEventListener('click', startQuiz);
