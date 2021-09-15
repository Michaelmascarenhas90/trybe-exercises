import express from 'express';
import rescue from 'express-recue';
import { promises as fs } from 'fs';

import fetch from 'node-fetch';

const app = express();

app.use((error, req, res, next) => {
    return res.send(500).json({ message: 'erro desconhecido' })
})

app.get('/fazerRequest', rescue (async (req, res) => {
    const { url } = req.query;
    
    const response = await fetch(url);
    const data = await response.json();
    
    res.status(202).json({ data });
}));

// usando rescue para tratar erros
app.get('/lerArquivo', recue (async (req, res, next) => {
    const { fileName } = req.query;

    const content = await fs.readFile(fileName);
    res.status(200).json({ content: content.toString() });
}));

//mesmas funções só que usando try catch

/*app.get('/fazerRequest', async (req, res) => {
    try {
        const { url } = req.query;
    
        const response = await fetch(url);
        const data = await response.json();
    
        res.status(202).json({ data });
    } catch (error) {
        if(error.message = 'Api fora do ar')
            return res.status(400).json({ message: 'Api fora do ar' });
        else
            res.status(500).send();
        // status 500 se refere a um erro não tratado, 
        // possibilita manter o funcionamento da api mesmo após apresentar erro  
    }
});*/


/*app.get('/lerArquivo', async (req, res, next) => {
    const { fileName } = req.query;
    try {
        const content = await fs.readFile(fileName);
        res.status(200).json({ content: content.toString() })
    } catch (error) {
        // com isso eu configuro para quando ocorrer um erro,
        // ser direcionado par o middleware especifico
        next(error);
    }
})*/

app.listen(3002, () => {console.log('http://localhost:3002 -> onde a api esta rodando')});
