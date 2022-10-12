const questions = [
    {
        text: `¿Es necesaria una buena relación entre tus empleados y el área de recursos humanos de tu empresa o negocio? ¿Por qué?`,
        correctText: `¡Correcto!`,
        incorrectText: `Falso`,
        correctIndex: 1,
        answers: [
            `No, no es necesaria del todo mientras que Recursos Humanos tenga todo bajo control`,
            `Si, para que el área de RH pueda gestionar bien su toma de decisiones y planes para la empresa en torno a la gente trabajando dentro de ella`,
            `Si, para que haya una buena relación entre todos los empleados`,
            `No, no tiene nada que ver`
        ],
    },
    {
        text: `¿Cuál de las siguientes opciones NO es una característica del perfil de alguien de recursos humanos?`,
        correctText: `¡Correcto!`,
        incorrectText: `Falso`,
        correctIndex: 3,
        answers: [
            `Pensamiento analítico `,
            `Comunicación asertiva y escucha activa`,
            `Humildad`,
            `Perseverancia`,
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
const openQuestion = document.querySelector('#open-question');
const input1 = document.querySelector('#form-1-1');
const input2 = document.querySelector('#form-1-2');
const input3 = document.querySelector('#form-1-3');
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

    if (score >= 80) {
        modalMessage.textContent = "¡Excelente!"
        incorrectImg.style.display = "none";
        correctImg.style.display = "block";

    } else {
        modalMessage.textContent = "Vuelve a intentarlo..."
        incorrectImg.style.display = "block";
        correctImg.style.display = "none";
        if (score < 25) {
            alert("Le recomendamos volver a leer esta sección para tener mayor puntuaje que 25.");
            window.location.href = './intro.html'
        }
    }
}

function checkTextBox() {
    if (input1.value.length > 5 && input2.value.length > 5 && input3.value.length > 5) {
        checkAll();
    } else {
        alert('Favor de enlistar 3 habilidades.');
    }
}

