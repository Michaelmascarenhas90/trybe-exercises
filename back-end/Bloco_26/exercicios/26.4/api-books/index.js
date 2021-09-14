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

app.post('/books', (req, res) => {
    res.send('POST /BOOKS')
})

app.put('/books', (req, res) => {
    res.send('PUT /BOOKS')
})

app.delete('/books', (req, res) => {
    res.send('DELETE /BOOKS')
})



app.listen(3001, () => {
    console.log('Example app listening on port 3001')
});