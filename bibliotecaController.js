const { Livro, Autor, Usuario, Emprestimo } = require('./biblioteca');

// Simulação de banco de dados em memória
let livros = [];
let autores = [];
let usuarios = [];
let emprestimos = [];

let livroId = 1;
let autorId = 1;
let usuarioId = 1;

// Cadastrar livro
function cadastrarLivro(titulo, nomeAutor) {
    const autor = autores.find(a => a.nome === nomeAutor);
    if (!autor) {
        console.log(`Autor ${nomeAutor} não encontrado!`);
        return;
    }
    const livro = new Livro(livroId++, titulo, autor);
    livros.push(livro);
    console.log(`Livro '${titulo}' cadastrado com sucesso!`);
}

// Cadastrar autor
function cadastrarAutor(nome) {
    const autor = new Autor(autorId++, nome);
    autores.push(autor);
    console.log(`Autor '${nome}' cadastrado com sucesso!`);
}

// Cadastrar usuário
function cadastrarUsuario(nome) {
    const usuario = new Usuario(usuarioId++, nome);
    usuarios.push(usuario);
    console.log(`Usuário '${nome}' cadastrado com sucesso!`);
}

// Realizar empréstimo
function realizarEmprestimo(tituloLivro, nomeUsuario) {
    const livro = livros.find(l => l.titulo === tituloLivro && !l.emprestado);
    const usuario = usuarios.find(u => u.nome === nomeUsuario);

    if (!livro || !usuario) {
        console.log('Livro ou Usuário não encontrado!');
        return;
    }

    livro.emprestado = true;
    const emprestimo = new Emprestimo(livro, usuario);
    emprestimos.push(emprestimo);
    console.log(`Empréstimo realizado com sucesso para o livro '${tituloLivro}'!`);
}

// Realizar devolução
function realizarDevolucao(tituloLivro) {
    const emprestimo = emprestimos.find(e => e.livro.titulo === tituloLivro && !e.dataDevolucao);
    
    if (!emprestimo) {
        console.log('Empréstimo não encontrado!');
        return;
    }

    emprestimo.realizarDevolucao();
    emprestimo.livro.emprestado = false;
    console.log(`Devolução realizada para o livro '${tituloLivro}'!`);
}

// Listar livros disponíveis
function listarLivrosDisponiveis() {
    const disponiveis = livros.filter(l => !l.emprestado);
    console.log('Livros Disponíveis:', disponiveis);
}

// Listar livros emprestados
function listarLivrosEmprestados() {
    const emprestados = livros.filter(l => l.emprestado);
    console.log('Livros Emprestados:', emprestados);
}

// Listar empréstimos
function listarEmprestimos() {
    console.log('Empréstimos Realizados:', emprestimos);
}

module.exports = {
    cadastrarLivro,
    cadastrarAutor,
    cadastrarUsuario,
    realizarEmprestimo,
    realizarDevolucao,
    listarLivrosDisponiveis,
    listarLivrosEmprestados,
    listarEmprestimos
};
