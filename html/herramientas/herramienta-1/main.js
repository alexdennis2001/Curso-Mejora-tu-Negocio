let correct = 0;
let count = 0;
let passingGrade = 70;
let score;

const modal = document.querySelector('#modal-fs');
const modalMessage = modal.querySelector('#modal-message');
const modalScore = modal.querySelector('#modal-score');
const modalTable = modal.querySelector('#modal-table');

$(".custom-control-label").on("click", function () {
    if ($(this).siblings().is(":checked")) {
        $(this).siblings().removeAttr("checked");
    } else {
        $(this).siblings().prop("checked", true);
    }
});

//radio input "Correct" Class
function checkAll() {
    // reset
    modalScore.classList.remove('text-danger');
    modalScore.classList.remove('text-success');
    modalTable.remove();
    count = 0;
    correct = 0;
    score = 0;

    $("div.question").each(function () {
        count++;
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



}

function getText(score) {
    if (score <= 69) return `No te preocupes, es un poco complicado al inicio. Te recomendamos volver a tomar el Módulo 1 y retomar el examen cuando te sientas más preparado. Si necesitas un apoyo adicional, consulta las siguientes ligas. Recuerda que este solo es el comienzo. Gracias por tu participación en el módulo 1.`;

    if (score >= 70 && score <= 99) return `Obtuviste una calificación satisfactoria, pero hay espacio para mejorar. Te recomendamos darle un repaso a los temas con los que tuviste problemas. Tu negocio va por un gran camino, pero recuerda implementar medidas correctivas en tus áreas de oportunidad. Si necesitas un apoyo adicional, puedes consultar las siguientes ligas. Gracias por tu participación en el Módulo 1.`;

    if (score == 100) return `¡Felicidades! Has obtenido la calificación más alta posible. Esto es reflejo de tu esfuerzo en el Módulo 1. De igual manera, es una señal que tu negocio va por excelente camino. Si te gustaría un repaso adicional, puedes consultar las siguientes ligas. Gracias por tu participación en el Módulo 1.`;

}