const questions = [
    {
        text: `¿Cuál es el segundo paso para la planificación de proyectos?`,
        correctText: `¡Correcto!, en el segundo paso para el plan de proyectos, se recomienda hacer un recuento con las personas que se contarán durante este proyecto, así como cómo participarán y en qué nivel.`,
        incorrectText: `Incorrecto. Te sugerimos repasar los 6 pasos para la planificación de un proyecto.`,
        correctIndex: 1,
        answers: [
            `Establecer el alcance del proyecto`,
            `Identificar las partes interesadas clave`,
            `Desarrollar las tareas`,
        ],
    },
    {
        text: `¿Al momento de diseñar un plan de proyecto es importante involucrar a los demás integrantes del equipo?`,
        correctText: `¡Correcto!, involucrar al equipo durante el proceso generará más aceptación lo que fomenta el compromiso durante el proyecto.`,
        incorrectText: `Incorrecto, recuerda que es esencial involucrar a tu equipo de trabajo en el diseño del proyecto para tener un mayor compromiso.`,
        correctIndex: 0,
        answers: [
            `Verdadero`,
            `Falso`,
        ],
    },
    {
        text: `¿Cuál de las siguientes opciones no es uno de los beneficios de planificar un proyecto?`,
        correctText: `¡Correcto!, en la planificación de un proyecto se debe mantener una posición flexible para poder modificar objetivos si es que las cosas cambian durante el desarrollo del proyecto.`,
        incorrectText: `Incorrecto, te sugerimos revisar los beneficios y la importancia de realizar una planificación de proyectos.`,
        correctIndex: 2,
        answers: [
            `Permite tener una mejor organización del proyecto`,
            `Establece expectativas claras sobre qué es lo que se va a lograr`,
            `Establecer objetivos inmodificables `,
        ],
    },
    {
        text: `¿Inspirarse en la planificación de otros proyectos es útil y correcto?`,
        correctText: `¡Correcto!, inspirarse de la planificación de otros proyectos y usarlos como guía puede ser de gran ayuda durante la planificación del proyecto.`,
        incorrectText: `Incorrecto, recuerda que al revisar otros planes puedes apoyarte para realizar un mejor trabajo.`,
        correctIndex: 0,
        answers: [
            `Verdadero`,
            `Falso`,
        ],
    },
];


const answersList = function (answers, correctIndex, id) {
    return answers.map((ans, i) => {
        let className = correctIndex === i ? 'option correct' : 'option';
        return `
        <div class="custom-control custom-radio">
            <input type="radio" class="custom-control-input ${className}" name="radiobutton${id}" />
            <label class="custom-control-label q-option-${i}" for="U13_Q${id}_A${i}">
                ${ans}
            </label>
        </div>
        `
    }).join('');
}

const question = function (i, { text, incorrectText, correctText, correctIndex, answers }) {
    const answersHtml = answersList(answers, correctIndex, i);

    return `
        <div class="question">
            <p class="question-text">
                ${i + 1}. ${text}
            </p>
            <p class="alertWrong mb-0 font-size-14 font-weight-bold" style="display: none; color: red">
                ${incorrectText}
            </p>
            <p class="alertCorrect mb-0 font-size-14 font-weight-bold" style="display: none; color: green">
                ${correctText}
            </p>
            ${answersHtml}
        </div>
        `;
}

const generateQuestions = function () {
    return questions.map((q, i) => {
        return question(i, q);
    }).join('');
}

const questionsContainer = document.querySelector('#questions');

const modal = document.querySelector('#modal-fs');
const modalMessage = modal.querySelector('#modal-message');
const modalScore = modal.querySelector('#modal-score');
const correctImg = modal.querySelector('#correct-img');
const incorrectImg = modal.querySelector('#incorrect-img');

document.addEventListener('DOMContentLoaded', function (_) {
    const qs = generateQuestions();
    questionsContainer.insertAdjacentHTML('afterbegin', qs);

    $(".custom-control-label").on("click", function () {
        console.log('clicked')
        if ($(this).siblings().is(":checked")) {
            $(this).siblings().removeAttr("checked");
        } else {
            $(this).siblings().prop("checked", true);
        }
    });

    incorrectImg.style.display = "none";
    correctImg.style.display = "none";
});

function checkAll() {
    var correct = 0;
    var count = 0;

    $("div.question").each(function () {
        count++;
        var elem = $(this);
        $(this).find(".alertCorrect").css("display", "none");
        $(this).find(".alertWrong").css("display", "none");
        $(this).removeClass("correct");
        $(this).removeClass("incorrect");
        var isCorrect = true;
        $(this)
            .find("input.custom-control-input")
            .each(function () {
                if ($(this).hasClass("correct")) {
                    if (!$(this).is(":checked")) {
                        isCorrect = false;
                    }
                } else {
                    if ($(this).is(":checked")) {
                        isCorrect = false;
                    }
                }
            });
        if (isCorrect == true) {
            correct++;
            $(this).find(".alertCorrect").css("display", "block");
            $(this).addClass("correct");
        } else {
            $(this).find(".alertWrong").css("display", "block");
            $(this).addClass("incorrect");
        }
    });
    let score = parseInt((correct * 100) / count);
    modalScore.textContent = `${score} / 100`;

    if (score >= 70) {
        modalMessage.textContent = "¡Felicidades! has aprobado esta herramienta de manera satisfactoria, ahora eres capaz de planear tus proyectos de forma efectiva."
        incorrectImg.style.display = "none";
        correctImg.style.display = "block";

    } else {
        modalMessage.textContent = "Tu calificación no fue aprobatoria pero puedes seguir intentándolo y repasando los conceptos el tiempo que necesites."
        incorrectImg.style.display = "block";
        correctImg.style.display = "none";
        if (score < 25) {
            alert("Le recomendamos volver a leer esta sección para tener mayor puntuaje que 25.");
            window.location.href = './intro.html'
        }
    }
}