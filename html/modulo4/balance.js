'use strict';
// Activos
const acp1 = document.getElementById('acp-1');
const acp2 = document.getElementById('acp-2');
const acp3 = document.getElementById('acp-3');
const totalAcp = document.getElementById('total-activos-corto-plazo');

const alp1 = document.getElementById('alp-1');
const totalAlp = document.getElementById('total-activos-largo-plazo');

const totalActivos = document.getElementById('total-activos');

// Pasivos
const pcp1 = document.getElementById('pcp-1');
const totalPcp = document.getElementById('total-pasivos-corto-plazo');

const plp1 = document.getElementById('plp-1');
const totalPlp = document.getElementById('total-pasivos-largo-plazo');

const totalPasivos = document.getElementById('total-pasivos');

// Capital
const utilidadPasada = document.getElementById('cap-1')
const capitalContable = document.getElementById('cap-2')
const pasivosYCapital = document.getElementById('cap-3')
const totalCapital = document.getElementById('total-cap')

function calcularAcp() {
    return parseFloat(acp1.value) + parseFloat(acp2.value) + parseFloat(acp3.value);
}

function calcularAlp() {
    return parseFloat(alp1.value);
}

function calcularPcp() {
    return parseFloat(pcp1.value);
}

function calcularPlp() {
    return parseFloat(plp1.value);
}

function calcularUtPasada() {
    return parseFloat(utilidadPasada.value);
}

function calcular() {
    // activos
    let activosCortoPlazo = calcularAcp();
    totalAcp.textContent = '$' + activosCortoPlazo;

    let activosLargoPlazo = calcularAlp();
    totalAlp.textContent = '$' + activosLargoPlazo;

    let totAct = activosCortoPlazo + activosLargoPlazo
    totalActivos.textContent = '$' + totAct;

    // pasivos
    let pasivosCortoPlazo = calcularPcp();
    totalPcp.textContent = '$' + pasivosCortoPlazo;

    let pasivosLargoPlazo = calcularPlp();
    totalPlp.textContent = '$' + pasivosLargoPlazo;

    let totPas = pasivosCortoPlazo + pasivosLargoPlazo;
    totalPasivos.textContent = '$' + totPas;

    // capital
    let utPasada = calcularUtPasada();
    capitalContable.textContent = '$' + totAct;
    pasivosYCapital.textContent = '$' + (totAct - totPas);

    let totCap = utPasada + totAct - totPas;
    totalCapital.textContent = '$' + totCap;
}
