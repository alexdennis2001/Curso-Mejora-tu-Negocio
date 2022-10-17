const questions = [
    {
        question: `¿Es necesaria una buena relación entre tus empleados y el área de recursos humanos de tu empresa o negocio? ¿Por qué?`,
        correctText: `¡Respuesta correcta!`,
        incorrectText: ``,
        correctIndex: 1,
        questions: [
            `No, no es necesaria
                del todo mientras que Recursos Humanos tenga todo bajo
                control.`,
            `Si, para que el área
                de RH pueda gestionar bien su toma de decisiones y planes para la
                empresa en torno a la gente trabajando dentro de ella.`,
            `Si, para que haya
                una buena relación entre todos los empleados.`,
            `No, no tiene nada
                que ver.`,
        ],

    },
    {
        question: `¿Has hecho pruebas con tu mercado?`,
        correctText: `¡Felicidades! Has probado tu mercado potencial`,
        incorrectText: `Recuerda que tu familiares y tus amigos siempre buscarán apoyarte, pero
        ellos no son tu mercado segmentado y no serán la totalidad de tus
        clientes, por lo que debes buscar la opinión de alguien más.`,
        correctIndex: 2,
        questions: [
            `Si, le enseñado mi
                producto/servicio a mi familia y les encanto.`,
            `No, todavía no pero
                lo he practicado mucho y tiene mucho potencial.`,
            `Si, he realizado
                entrevistas y pruebas con mi mercado segmentado.`,
            `Si, le enseñe mi
                producto/servicio a mis amigos y me dijeron que ellos lo comprarían.`,
        ],
    },
    {
        question: `¿Ya definiste a tus socios y empleados?`,
        correctText: `¡Felicidades!`,
        incorrectText: `Recuerda que para crear un negocio consciente debes tener trabajadores
        que quieran estar ahí por su propia disposición y no solo por el aspecto
        económico.`,
        correctIndex: 3,
        questions: [
            `No lo he hablado con
                ellos formalmente, pero mis hijos me ayudarán.`,
            `Sí, ya encontré a
                algunos empleados que están dispuestos a trabajar por el salario
                mínimo.`,
            `No he pensado en ese
                aspecto del negocio.`,
            `Sí, ya tengo varios
                candidatos que quieren el trabajo y que entienden el propósito de la
                empresa.`,
        ],
    },
    {
        question: `¿Qué tan relevante considera que es tener una Propuesta de Valor?`,
        correctText: `¡Felicidades! Comprendes la importancia de una propuesta de valor!`,
        incorrectText: `La propuesta de valor es de suma importancia para tu negocio. Para
        desarrollarla, pregúntate “¿Por qué deberían comprarme a mí y no a mi
        competencia?, ¿Qué es lo que le agrega valor a mi negocio?”. Recuerda
        que el enfoque de tu negocio deberían ser tus clientes y cómo solucionar
        problemas para ellos. Tener una gran propuesta de valor es demostrar que
        te importa su opinión y su experiencia.`,
        correctIndex: 1,
        questions: [
            `Nada importante, no
                planeo gastar tiempo en desarrollarla.`,
            `Muy importante,
                considero que es la base de mi negocio.`,
            `Poco importante,
                desarrolle una pero no veo cómo se conecta con otros temas.`,
            `Importante, la uso
                como herramienta para tomar decisiones.`,
        ],
    },
    {
        question: `¿Conoces tu mercado?`,
        correctText: `¡Felicidades! Conoces tu mercado meta!`,
        incorrectText: `Es importante analizar el perfil de tus clientes actuales y potenciales.
        Encuentra patrones en su comportamiento y en sus perfiles; busca que tus
        beneficios se alineen con lo que ellos buscan.`,
        correctIndex: 3,
        questions: [
            `No, pero he
                observado que mi producto/servicio es algo que hace falta en el
                mercado y he encontrado mi nicho.`,
            `Sí, he hablado con
                mis familiares/amigos y consideran que es una buena idea.`,
            `Sí, ya tengo
                clientes.`,
            `Sí, he analizado el
                perfil de mis clientes actuales y los de mis competidores.`,
        ],
    },
    {
        question: `Desarrollo de tu Plan de Negocios; ¿Conoces tus problemas
        potenciales?`,
        correctText: `¡Felicidades! Comprender tus problemas potenciales es el primer paso en
        solucionarlos.`,
        incorrectText: `Recuerda que tus retos potenciales son cosas como una falta de
        proveedores, maquinaria faltante, etc. Podrían no ocurrir, pero en caso
        de que si lo hagan es mejor que ya los hayas identificado para poder
        tener un plan en caso de que si lleguen a suceder.`,
        correctIndex: 0,
        questions: [
            `Si, entiendo los
                retos con los que me podría enfrentar y estoy activamente buscando
                soluciones para estos.`,
            `Si, podría no
                encontrar suficientes clientes y por ende no tener suficientes
                ventas.`,
            `Si, pero no
                considero que estos retos me afecten.`,
            `No considero que
                tenga problemas potenciales.`,
        ],
    },
    {
        question: `¿Has analizado tus costos?`,
        correctText: `¡Felicidades!`,
        incorrectText: `Recuerda que tus recursos no son ilimitados, debes establecer cuándo y
        dónde los gastaras para poder continuar con el funcionamiento de tu
        empresa.`,
        correctIndex: 3,
        questions: [
            `Casi no tengo costos
                porque uso cosas que ya tengo y materiales del hogar.`,
            `Si, ya he cortado
                los costos innecesarios y obtuve financiamiento para los
                mayores.`,
            `Si, ya he priorizado
                mis gastos y entiendo cuanto me cuesta realizar mi
                producto/servicio.`,
            `Combinación de B y
                C.`,
        ],
    },
    {
        question: `¿Cumples con los requerimientos legales?`,
        correctText: `¡Felicidades! Cumples con los requerimientos legales.`,
        incorrectText: `Recuerda que los lineamientos legales son un paso esencial para
        realizar tu negocio, esto para mantenerte dentro de lo ético y lo
        legal. `,
        correctIndex: 3,
        questions: [
            `Entiendo que
                debo solicitar la denominación social a la Secretaría de
                Economía (SE), crear una acta constitutiva para inscribirla en
                el Registro Público de la Propiedad y el Comercio
                (RPPC).`,
            `Entiendo que
                debo obtener mi Registro Federal de Contribuyentes (RFC) ante el
                SAT, y registrarme en el Instituto Mexicano del Seguro Social
                (IMSS) y el el Registro Nacional de Inversiones Extranjeras
                (RNIE).`,
            `Entiendo que
                debo pagar impuestos y ya investigue sobre el proceso.`,
            `Todas las
                anteriores.`,
        ],
    },
];

$(".custom-control-label").on("click", function () {
    if ($(this).siblings().is(":checked")) {
        $(this).siblings().removeAttr("checked");
    } else {
        $(this).siblings().prop("checked", true);
    }
});

const question = document.querySelector('#question');
const questionText = question.querySelector('.question-text');
const option1 = question.querySelector('.q-option-1');
const option2 = question.querySelector('.q-option-2');
const option3 = question.querySelector('.q-option-3');
const option4 = question.querySelector('.q-option-4');

const answerModal = document.querySelector('#modal-answer');
const correctImg = answerModal.querySelector('#correct-img');
const incorrectImg = answerModal.querySelector('#incorrect-img');
const answerTitle = answerModal.querySelector('#modal-answer-title');
const answerText = answerModal.querySelector('#modal-answer-text');

const quizProgress = document.querySelector('#quiz-progress');

const questionsWrap = document.querySelector('#questions-wrap');

const modal = document.querySelector('#results');
const modalMessage = modal.querySelector('#modal-message');
const modalScore = modal.querySelector('#modal-score');
const modalTable = modal.querySelector('#modal-table');


document.addEventListener('DOMContentLoaded', function (_) {
    questionText.textContent = `1. ${questions[0].question}`;
    option1.textContent = questions[0].questions[0];
    option2.textContent = questions[0].questions[1];
    option3.textContent = questions[0].questions[2];
    option4.textContent = questions[0].questions[3];

    incorrectImg.style.display = "none";
    correctImg.style.display = "none";
    modal.style.display = "none";
});

let i = 0;
let correct = 0;
const factor = questions.length;

function checkQuestion() {
    // Check if answer is correct
    let j = 0
    const selectedAnswer = question.querySelectorAll("input[type=radio]");
    selectedAnswer.forEach((el, k) => {
        if (el.checked) {
            j = k;
            el.checked = false;
        }
    });

    // Adapt modal 
    if (j === questions[i].correctIndex) {
        answerTitle.classList.add('text-success');
        answerTitle.classList.remove('text-danger')
        answerModal.classList.add('bg-sucess');

        correctImg.style.display = "block";
        incorrectImg.style.display = "none";

        answerTitle.textContent = "Excelente";
        answerText.textContent = questions[i].correctText;

        correct += 1;
    } else {
        answerTitle.classList.add('text-danger');
        answerTitle.classList.remove('text-success')

        incorrectImg.style.display = "block";
        correctImg.style.display = "none";

        answerTitle.textContent = "Punto a mejorar";
        answerText.textContent = questions[i].incorrectText;
    }

    // Update question card
    i += 1;

    quizProgress.ariaValueNow = `${(i / factor) * 100}`;
    quizProgress.style.width = (i / factor) * 100 + '%';

    if (i >= questions.length) {
        questionsWrap.style.display = "none";
        results.style.display = "block";

        // Modal 
        let score = (correct * 100) / questions.length;
        let text = getText(score);
        modalMessage.textContent = text;
        modalScore.textContent = `${score} / 100`;

        if (score < passingGrade) {
            modalScore.classList.add('text-danger');
        } else {
            modalScore.classList.add('text-success');
        }

        $(".score > span").html(
            "Resultado: " + score + "/100"
        );
        if (score >= passingGrade) {
            $(".msg > span").html("¡Bien hecho!");
            $(".msg > span").css("color", "green");
        } else if (score < passingGrade) {
            $(".msg > span").html(
                "Te invitamos a regresar al contenido para tu aprendizaje."
            );

        }
        if (score < 25) {
            alert("Le recomendamos volver a leer esta sección para tener mayor puntuaje que 25.");
            window.location.href = './intro.html'
        }
    } else {
        questionText.textContent = `${i + 1}. ${questions[i].question}`;
        option1.textContent = questions[i].questions[0];
        option2.textContent = questions[i].questions[1];
        option3.textContent = questions[i].questions[2];
        option4.textContent = questions[i].questions[3];
    }

}

function getText(score) {
    if (score <= 69) return `No te preocupes, es un poco complicado al inicio. Te recomendamos volver a tomar el Módulo 1 y retomar el examen cuando te sientas más preparado. Si necesitas un apoyo adicional, consulta las siguientes ligas. Recuerda que este solo es el comienzo. Gracias por tu participación en el módulo 1.`;

    if (score >= 70 && score <= 99) return `Obtuviste una calificación satisfactoria, pero hay espacio para mejorar. Te recomendamos darle un repaso a los temas con los que tuviste problemas. Tu negocio va por un gran camino, pero recuerda implementar medidas correctivas en tus áreas de oportunidad. Si necesitas un apoyo adicional, puedes consultar las siguientes ligas. Gracias por tu participación en el Módulo 1.`;

    if (score == 100) return `¡Felicidades! Has obtenido la calificación más alta posible. Esto es reflejo de tu esfuerzo en el Módulo 1. De igual manera, es una señal que tu negocio va por excelente camino. Si te gustaría un repaso adicional, puedes consultar las siguientes ligas. Gracias por tu participación en el Módulo 1.`;

}