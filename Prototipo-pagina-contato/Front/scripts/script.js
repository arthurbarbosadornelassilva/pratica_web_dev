const protocolo = 'http://'
const baseURL = 'localhost:3000'
const contatoEndpoint = '/contato'

// Ao criar uma função assíncrona para obter dados nesse script, associarmos o script para o arquivo HTML e ao index.JS, estamos fazendo a primeira 'integração' entre o front e o back desse sistema
// Para evitar erros em tempo de execussão, aplicamos o CORS no código, que é um mecanismo de segurança que bloqueia requisições em portas diferentes
// Para instalar o cors: 'npm install cors'

async function obterDados() {
    const URLCompleta = `${protocolo}${baseURL}${contatoEndpoint}`;
    const dados = (await axios.get(URLCompleta)).data
    console.log(dados);

<<<<<<< HEAD
    let principal = document.querySelector('#principal');
    for (let dado of data) {
        let paragrafo = document.createElement('p');
        paragrafo.innerHTML = `Nome: ${dado.nome}`;

        principal.appendChild(paragrafo);
=======
    let corpoPrincipal = document.querySelector('.corpo-principal');
    let nome = corpoPrincipal.getElementsByClassName('paragrafo-nome')
    for (let dado of dados) {
        let dadoNome = nome.insertRow()
        dadoNome.innerHTML = dado.nome
>>>>>>> 4998615a50ed638df64dc52541cf2d00da6ba01c
    }

    let secundario = document.querySelector('#secundario');
    for (let dado of data) {
        let paragrafo = document.createElement('p');
        paragrafo.innerHTML = `Email: ${dado.email}`;

        secundario.appendChild(paragrafo);
    }

    let terciario = document.querySelector('#terciario');
    for (let dado of data) {
        let paragrafo = document.createElement('p');
        paragrafo.innerHTML = `Mensagem de ${dado.nome}: ${dado.mensagem}`;

        terciario.appendChild(paragrafo);
    }
}