const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const books = [
    { id: 1, title: 'The Lord of Rings', author: 'J.R.R. Tolkien' },
    { id: 2, title: 'Dune', author: 'Frank Herbert' },
    { id: 3, title: 'Fundation', author: 'Isaac Asimov' },
    { id: 4, title: 'The Man in The High Castle', Author: 'Philip K Dick' },
    { id: 5, title: '1984', author: 'George Orwell' },
    { id: 6, title: 'Brave New World', author: 'Aldous Huxley' }
];

app.get('/books/search', (req, res) => {
    const author = req.query.author;
    const filteredBooks = books.filter((book) => book.author === author);

    return res.status(200).json({ books: filteredBooks });
})

app.get('/books/:id', (req, res) => {
    const id = req.params.id;
    const book = books.find((book) => book.id === Number(id));

    if(!book){
        return res.status(404).json({ message: 'Livro não encontrado' })
    }
    return res.status(200).json(book);
})

app.get('/books', (req, res) => {
    return res.json({ books });
})

const validadeToken = (req, res, next) => {
    // validação para que verifica o token de acesso com do usuario
    const token = req.headers.authorization;

    if (token !== "super-senha") {
        return res.status(401).json({ message: 'Acesso não autorizado'})
    }

    next();
}

const validateParams = (req, res, next) => {
    // só é possivel recuperar o body pois já foi configurado o bodyParser
    const { id, title, author } = req.body;
    if (!id) {
        return res.status(400).json({ message: 'Id não preenchido' });
    }
    if (!title) {
        return res.status(400).json({ message: 'title nao preenchido' });
    }
    if (!author) {
        return res.status(400).json({ message: 'Author não preenchido' });
    }

    next();
}

app.post('/books', validadeToken, validateParams, (req, res) => {

    books.push({ id, title, author });
    // status 201 equivale a novo item criado
    return res.status(201).json({ message: "New book create!" })
});

app.put('/books/:id', validadeToken, validateParams, (req, res) => {
    const { id } = req.params;
    const { title, author } = req.body;
    const bookIndex = books.findIndex((book) => { book.id === +id });

    if(bookIndex === -1){
        return res.status(404).send();
    }
    // o id que sera usado na atualização sera passado atraves do index.
    books[bookIndex] = { id:Number(id), title, author };
    // status 204, a solicitação teve exito porem não precisa de resposta
    return res.status(204).end();
})

app.delete('/books/:id', (req, res) => {
    const { id } = req.params;
    const bookIndex = books.findIndex((book) => { book.id === Number(id) })
    
    if (bookIndex === -1) {
        return res.status(404).send();
    }
    books.splice(bookIndex);
    // o status 204 ocorre quando a requisição teve exito, porem não retorna nada no corpo
    return res.status(2040).send();
})



app.listen(3001, () => {
    console.log('API rodando na port 3001')
});