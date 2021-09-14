import express from 'express';
import fetch from 'node-fetch';

const app = express();

app.get('/fazerRequest', async (req, res) => {
    try {
        const { url } = req.query;
    
        const response = await fetch(url);
        const data = await response.json();
    
        res.status(202).json({ data });
    } catch (error) {
        // status 500 se refere a um erro não tratado, 
        // possibilita manter o funcionamento da api mesmo após apresentar erro
        res.status(500).send();
        
    }
    

});

app.listen(3002, () => {console.log('http://localhost:3002 -> onde a api esta rodando')});
