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

    let principal = document.querySelector('#principal');
    for (let dado of dados) {
        let paragrafo = document.createElement('p');
        paragrafo.innerHTML = `Nome: ${dado.nome}`;

        principal.appendChild(paragrafo);
    }

    let secundario = document.querySelector('#secundario');
    for (let dado of dados) {
        let paragrafo = document.createElement('p');
        paragrafo.innerHTML = `Email: ${dado.email}`;

        secundario.appendChild(paragrafo);
    }

    let terciario = document.querySelector('#terciario');
    for (let dado of dados) {
        let paragrafo = document.createElement('p');
        paragrafo.innerHTML = `Mensagem de ${dado.nome}: ${dado.mensagem}`;

        terciario.appendChild(paragrafo);
    }
}

async function cadastrarDados() {
    const URLCompleta = `${protocolo}${baseURL}${contatoEndpoint}`;

    //pega os inputs dos dados inseridos pelo usuário
    let nomeInput = document.querySelector('#nomeInput');
    let emailInput = document.querySelector('#emailInput');
    let mensagemInput = document.querySelector('#mensagemInput');
    //pega os valores digitados pelo usuário
    let nome = nomeInput.value;
    let email = emailInput.value;
    let mensagem = mensagemInput.value;
    // //limpa os campos que o usuário digitou
    nome = ''
    email = ''
    mensagem = ''
    //envia os dados coletador pro back
    const dados = (await axios.post(URLCompleta, {nome, email, mensagem})).data

    let principal = document.querySelector('#principal');
    principal.innerHTML = ''
    for (let dado of dados) {
        let paragrafo = document.createElement('p');
        paragrafo.innerHTML = `Nome: ${dado.nome}`;

        principal.appendChild(paragrafo);
    }

    let secundario = document.querySelector('#secundario');
    secundario.innerHTML = ''
    for (let dado of dados) {
        let paragrafo = document.createElement('p');
        paragrafo.innerHTML = `Email: ${dado.email}`;

        secundario.appendChild(paragrafo);
    }

    let terciario = document.querySelector('#terciario');
    terciario.innerHTML = ''
    for (let dado of dados) {
        let paragrafo = document.createElement('p');
        paragrafo.innerHTML = `Mensagem de ${dado.nome}: ${dado.mensagem}`;

        terciario.appendChild(paragrafo);
    }
}