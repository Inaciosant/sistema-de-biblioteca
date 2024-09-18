const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(__dirname));

// Simulando um banco de dados em memória
let livros = [];
let autores = [];
let usuarios = [];
let emprestimos = [];

// Rotas principais
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Rota para cadastrar livros
app.post('/cadastrar-livro', (req, res) => {
    const { titulo, autor } = req.body;
    livros.push({ titulo, autor, disponivel: true });
    res.send('Livro cadastrado com sucesso!');
});

// Rota para cadastrar autores
app.post('/cadastrar-autor', (req, res) => {
    const { nome } = req.body;
    autores.push({ nome });
    res.send('Autor cadastrado com sucesso!');
});

// Rota para cadastrar usuários
app.post('/cadastrar-usuario', (req, res) => {
    const { nome } = req.body;
    usuarios.push({ nome });
    res.send('Usuário cadastrado com sucesso!');
});

// Rota para realizar empréstimo
app.post('/realizar-emprestimo', (req, res) => {
    const { titulo, usuario } = req.body;
    const livro = livros.find(l => l.titulo === titulo && l.disponivel);
    if (livro) {
        livro.disponivel = false;
        emprestimos.push({ titulo, usuario, data: new Date() });
        res.send('Empréstimo realizado com sucesso!');
    } else {
        res.send('Livro não disponível.');
    }
});

// Rota para realizar devolução
app.post('/realizar-devolucao', (req, res) => {
    const { titulo } = req.body;
    const livro = livros.find(l => l.titulo === titulo && !l.disponivel);
    if (livro) {
        livro.disponivel = true;
        res.send('Devolução realizada com sucesso!');
    } else {
        res.send('Livro não encontrado ou já devolvido.');
    }
});

// Rota para consultar livros disponíveis
app.get('/livros-disponiveis', (req, res) => {
    const disponiveis = livros.filter(l => l.disponivel);
    res.json(disponiveis);
});

// Rota para consultar livros emprestados
app.get('/livros-emprestados', (req, res) => {
    const emprestados = livros.filter(l => !l.disponivel);
    res.json(emprestados);
});

// Rota para consultar empréstimos
app.get('/emprestimos', (req, res) => {
    res.json(emprestimos);
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
