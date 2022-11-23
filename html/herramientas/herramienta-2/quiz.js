const questions = [
    {
        text: `Un sitio web es un conjunto de archivos electrónicos y páginas web enfocados en un tema en particular, que suele ser utilizado únicamente para la comunicación entre individuos`,
        correctText: `¡Correcto!, los sitios webs pueden ser utilizados con diferentes fines además de comunicación, como por instituciones públicas y privadas, medio para mostrar la oferta de sus bienes y servicios de empresas, entre otros.`,
        incorrectText: `Recuerda que los sitios web pueden tener otros fines, como los de las instituciones públicas y privadas, los de las empresas para mostrar la oferta de sus servicios, fines educativos, entre otros. `,
        correctIndex: 1,
        answers: [`Verdadero`, `Falso`],
    },
    {
        text: `¿Cuál de las siguientes opciones NO es un beneficio de la creación de un sitio web?`,
        correctText: `“¡Correcto!, los sitios web no disminuyen la carga de trabajo necesariamente”`,
        incorrectText: `Incorrecto...`,
        correctIndex: 2,
        answers: [
            `Aumenta el alcance del negocio`,
            `Mejora la imagen`,
            `Disminuye la carga de trabajo`,
            `Mejor servicio al cliente (contacto directo)`,
        ],
    },
    {
        text: `Al momento de crear tu sitio web, es importante considerar mantenerlo en un formato simple y fácil de entender.`,
        correctText: `¡Correcto!, al utilizar un formato más simple y fácil de entender, permites a los usuarios sentirse más cómodos al visitar tu sitio web.`,
        incorrectText: `Incorrecto, un sitio web complicado y poco llamativo puede ser tedioso para el visitante y que este pierda el interés.`,
        correctIndex: 0,
        answers: [`Verdadero`, `Falso`],
    },
    {
        text: `¿Qué tipo de datos soporta Google Analytics?`,
        correctText: `¡Correcto!, Google Analytics es una herramienta que nos permite visualizar estadísticas como las mencionadas anteriormente.`,
        incorrectText: `Incorrecto, Google Analytics no ofrece ese tipo de información`,
        correctIndex: 1,
        answers: [
            `Porque el cliente está interesado en el sitio web`,
            `Demografía, cuantas personas lo visitan, como llegaron a él y si lo vieron más de una vez.`,
            `Geografía, economía y estatus social de las personas que lo visitan `
        ],
    },
    {
        text: `¿Cuál es el tipo de plataforma que se encarga de desarrollar el código por ti?`,
        correctText: `¡Correcto!, la plataforma de CMS propietario desarrolla el código por ti, mientras tú utilizas la interfaz gráfico, arrastrando y soltando elementos`,
        incorrectText: ` Incorrecto, en este tipo de plataforma no se desarrolla el código por ti`,
        correctIndex: 1,
        answers: [
            `Sitios de plataforma CMS`,
            `Sitios de plataforma CMS propietario`,
            `Sitio de plataforma creado desde cero (programado)`,
        ],
    }
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
        <div class="question col-md-5 col-sm-12 mx-1">
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

const goBack = document.querySelector('#go-back');
goBack.style.display = 'none';

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

    goBack.style.display = 'block';

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
        }
    }
}