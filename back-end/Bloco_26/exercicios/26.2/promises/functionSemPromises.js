function calcularDivisao(num1, num2) {
    if(num2 == 0) throw new Error("não pode fazer uma divisão por zero");

    const resultado = num1 / num2;

    return resultado;
}

try {
    const resultado = calcularDivisao(1, 0);
    console.log(`Resultado da divisão: ${resultado}`);
} catch(e) {
    console.log(`Erro: ${e.message}`);
}
