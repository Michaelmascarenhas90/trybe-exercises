const readLine = require("readline-sync");

function executaCalculo() {
    const a = readLine.questionInt("digite o valor de a: ");
    const b = readLine.questionInt("digote o valor de b: ");
    const c = readLine.questionInt("digite o valor de c: ");

    const delta = calculaDelta(a, b, c);

    if(delta < 0) {
        console.log("Impossivel calcular delta negativo");
        return;
    }

    const result = calculaX(a, b, delta);

    console.log(`Resultado de X1 = ${result.x1}, Resultado de X2 = ${result.x2}`);
}

function calculaDelta(a, b, c) {
    return Math.pow(b, 2) - 4 * a * c;
}

function calculaX(a, b, delta) {
    const x1 = ((-b + Math.sqrt(delta)) / (2 * a))
    const x2 = ((-b - Math.sqrt(delta)) / (2 * a))

    return { x1, x2 };
}

executaCalculo();
