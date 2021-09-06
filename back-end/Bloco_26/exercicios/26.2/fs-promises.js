const fs = require('fs').promises;

// lê todos os arquivos que contém no diretorio

fs.readdir('./')
    .then(fileNames => {
    // o Promise.all( vai receber um array de promises,
    // e só vai seguir em frente quando todas as promises forem resolvidas);
        return Promise.all(fileNames.map((fileName) => fs.readFile(fileName)));
    // o return é usado para passar o resultado desse .then direto para o .then seguinte
    })
    .then((files) => {
        // o reduce faz a operação de somar o resultado da ultima soma com o proximo elemento do array
        //byteLength pegara o valor do tamanho do arquivo para executar a operação do reduce a partir do indice 0
        return files.reduce((total, file) => total + file.byteLength, 0);
    })
    // o .then recebe o valor total das operações feitas pelo reduce como parametro inicial.
    .then((totalSize) => {
        console.log(`Tamanho total dos arquivos: ${totalSize}`);
    })