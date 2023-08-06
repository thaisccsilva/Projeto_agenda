const form = document.getElementById('agenda-dados')
const contatos = [];
const numeros = [];

let linhas ='';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    if (contatos.includes(inputNomeContato.value)) {
        alert(`O contato ${inputNomeContato.value} já está na agenda!`)
    } else {
        contatos.push(inputNomeContato.value);
        numeros.push(inputNumeroContato.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`; 
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += '</tr>'

        linhas += linha;
    }

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

console.log(contatos);
console.log(numeros);