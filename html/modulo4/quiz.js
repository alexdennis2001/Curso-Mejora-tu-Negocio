const questions = [
    {
        text: `Escoge la opción que indique los tipos de utilidad que existen `,
        correctText: `¡Correcto!, son los tres tipos de utilidad`,
        incorrectText: `Incorrecto, revisa los tipos de utilidad presentados en el subtema 1 del Módulo`,
        correctIndex: 0,
        answers: [
            `Utilidad bruta, de operación y neta`,
            `Utilidad bruta, parcial y total`,
            `Utilidad neta y complementaria`,
        ],
    },
    {
        text: `¿A qué se refiere el concepto de liquidez?`,
        correctText: `¡Correcto! la liquidez es la capacidad de cubrir las necesidades a corto plazo`,
        incorrectText: `Incorrecto, te recomendamos repasar el tema 2 para entender mejor el concepto de liquidez`,
        correctIndex: 2,
        answers: [
            `Capacidad de un objeto a cambiar a estado líquido `,
            `Capacidad de cubrir las necesidades a largo plazo`,
            `Capacidad de cubrir las necesidades a corto plazo`,
        ],
    },
    {
        text: `¿El estado de resultados es una herramienta que sirve para analizar información de tu negocio, pero esta está enfocada en mostrar el estado de los activos, pasivos, y capital de la empresa?`,
        correctText: `¡Correcto!, el estado de resultados se encarga de mostrar cuánto estamos ganando de nuestras ventas y visualizar cuales son los gastos.`,
        incorrectText: `Incorrecto el estado de resultados no se encarga de analizar esto.`,
        correctIndex: 1,
        answers: [
            `Verdadero`,
            `Falso`,
        ],
    },
    {
        text: `¿Cuál es la función del SAT?`,
        correctText: `¡Correcto! la función general del SAT es hacerse responsable de la legislación fiscal y aduanera.`,
        incorrectText: `Falso, te recomendamos repasar el subtema 4 para tener un mayor entendimiento sobre el SAT y sus funciones.`,
        correctIndex: 1,
        answers: [
            `Autentificar y dar publicidad a los actos y hechos del estado civil de las personas`,
            `La responsabilidad de aplicar la legislación fiscal y aduanera`,
            `Inscripción de personas, cosas y actos en relación a la negociación mercantil`,
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
        <div class="question col-md-5 col-sm-11 mx-1">
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
        modalMessage.textContent = "¡Felicidades! Has aprobado el módulo de contabilidad y finanzas de manera satisfactoria, ahora eres capaz de tener un mejor control de tu dinero."
        incorrectImg.style.display = "none";
        correctImg.style.display = "block";

    } else {
        modalMessage.textContent = "Tu calificación no fue aprobatoria pero puedes seguir intentándolo y repasando los conceptos el tiempo que necesites."
        incorrectImg.style.display = "block";
        correctImg.style.display = "none";
    }
}