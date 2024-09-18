// Classe Livro
class Livro {
    constructor(id, titulo, autor) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.emprestado = false;
    }
}

// Classe Autor
class Autor {
    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
    }
}

// Classe Usuário
class Usuario {
    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
    }
}

// Classe Emprestimo
class Emprestimo {
    constructor(livro, usuario) {
        this.livro = livro;
        this.usuario = usuario;
        this.dataEmprestimo = new Date();
        this.dataDevolucao = null;
    }

    realizarDevolucao() {
        this.dataDevolucao = new Date();
    }
}

module.exports = { Livro, Autor, Usuario, Emprestimo };
