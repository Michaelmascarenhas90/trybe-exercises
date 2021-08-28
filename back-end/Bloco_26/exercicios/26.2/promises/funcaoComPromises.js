function calcularDivisao(num1, num2) {
    // configura a promise com uma callback resolve e reject
    const promise = new Promise((resolve, reject) => {
        // em caso de erro vai tratar com um reject, e retornar o erro configurado com o new Error
        if(num2 == 0) reject(new Error("Não é possivel dividir por zero"));
        
        const resultado  = num1 / num2;
        // em caso de sucesso retorna um resolve com o resultado
        resolve (resultado);
    });
    // é retornado uma promise que sera tratada na chamada da função
    return promise;
}
// quando a função é chamada a mesma é tratada de forma assincrona, com .then em caso de sucesso,
// e o .catch em caso de erro.
calcularDivisao(2, 0)
    .then((result) => console.log(result))
    .catch((err) => console.log(`Erro: ${err.message}`))
