// Função para cadastrar livro
document.getElementById('formLivro').addEventListener('submit', function(e) {
    e.preventDefault();
    const titulo = document.getElementById('titulo').value;
    const autor = document.getElementById('autor').value;
    fetch('/cadastrar-livro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ titulo, autor })
    }).then(res => res.text()).then(alert);
});

// Função para cadastrar autor
document.getElementById('formAutor').addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = document.getElementById('nomeAutor').value;
    fetch('/cadastrar-autor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome })
    }).then(res => res.text()).then(alert);
});

// Função para cadastrar usuário
document.getElementById('formUsuario').addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = document.getElementById('nomeUsuario').value;
    fetch('/cadastrar-usuario', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome })
    }).then(res => res.text()).then(alert);
});

// Função para realizar empréstimo
document.getElementById('formEmprestimo').addEventListener('submit', function(e) {
    e.preventDefault();
    const titulo = document.getElementById('tituloEmprestimo').value;
    const usuario = document.getElementById('nomeEmprestimo').value;
    fetch('/realizar-emprestimo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ titulo, usuario })
    }).then(res => res.text()).then(alert);
});

// Função para realizar devolução
document.getElementById('formDevolucao').addEventListener('submit', function(e) {
    e.preventDefault();
    const titulo = document.getElementById('tituloDevolucao').value;
    fetch('/realizar-devolucao', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ titulo })
    }).then(res => res.text()).then(alert);
});

// Consultar livros disponíveis
document.getElementById('consultarLivrosDisponiveis').addEventListener('click', function() {
    fetch('/livros-disponiveis').then(res => res.json()).then(data => {
        const lista = document.getElementById('listaLivrosDisponiveis');
        lista.innerHTML = '';
        data.forEach(livro => {
            const li = document.createElement('li');
            li.textContent = `${livro.titulo} por ${livro.autor}`;
            lista.appendChild(li);
        });
    });
});

// Consultar livros emprestados
document.getElementById('consultarLivrosEmprestados').addEventListener('click', function() {
    fetch('/livros-emprestados').then(res => res.json()).then(data => {
        const lista = document.getElementById('listaLivrosEmprestados');
        lista.innerHTML = '';
        data.forEach(livro => {
            const li = document.createElement('li');
            li.textContent = `${livro.titulo} por ${livro.autor}`;
            lista.appendChild(li);
        });
    });
});
