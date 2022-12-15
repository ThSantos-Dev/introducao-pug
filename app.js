const express = require('express');
const app = express();

// Confugurando o tipo de template
app.set('views', './views'); // indicando aonde se localiza os templates
app.set('view engine', 'pug');// 1- tipo de configuração, 2 - tipo de arquivo

app.use(express.static('public')) // indicando aonde estarão os arquivos estáticos do projeto

app.get('/', (req, res) => {
    res.render('index', {
        titulo: "Muito top esse sistema",
        mensagem: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium a, inventore ab animi omnis, reprehenderit ea ducimus magni cumque blanditiis deserunt aliquid? Reiciendis quod necessitatibus illum unde dignissimos praesentium cupiditate."
    });
})

app.get('/produtos', (req, res) => {
    const products = ["Uva", "Manga", "Batata doce"]

    res.render('listagem_produtos', { list: products })
})

app.listen(3000, () => console.log('listening on port 3000! 🚀✨'));