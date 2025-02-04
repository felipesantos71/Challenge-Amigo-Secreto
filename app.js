//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
//declarando variaveis e arrays
let listaAmigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, digite um nome válido.");
        return;
    }

    if (listaAmigos.includes(nome)) {
        alert("Esse nome já foi adicionado.");
        return;
    }

    listaAmigos.push(nome);
    atualizarLista();
    input.value = "";
}

function atualizarLista() {
    const ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";

    listaAmigos.forEach(nome => {
        const li = document.createElement("li");
        li.textContent = nome;
        ul.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear.");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    const nomeSorteado = listaAmigos[indiceSorteado];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 ${nomeSorteado} é o amigo secreto! 🎉</li>`;
}