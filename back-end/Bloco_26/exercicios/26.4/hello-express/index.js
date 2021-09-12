const express = require('express');

const app = express(); // 1

app.get('/hello', (req, res) => {
    res.send('Outra forma de usar')
}); // 2

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
}); // 3

// function handleHelloWorldRequest(req, res) {
//  res.status(200).send('Hello World!'); // 4
// }
