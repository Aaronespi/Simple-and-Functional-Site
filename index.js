const express = require('express');
const { readFile } = require('fs').promises;
const app = express();

app.get('/', async (request, response) => {
    response.send( await readFile('./index.html', 'utf8'));
});

app.get('/about', async (request, response) => {
    response.send( await readFile('./about.html', 'utf8'));
});

app.get('/contact-me', async (request, response) => {
    response.send( await readFile('./contact-me.html', 'utf8'));
});

app.use(async (request, response) => {
    response.status(404).send( await readFile('./404.html', 'utf8'));
});

app.listen(8080, () => {
    console.log('Server listening on port 8080');
});