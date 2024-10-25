const protocolo = 'http://'
const baseURL = 'localhost:3000'
const contatoEndpoint = '/contato'

// Ao criar uma função assíncrona para obter dados nesse script, associarmos o script para o arquivo HTML e ao index.JS, estamos fazendo a primeira 'integração' entre o front e o back desse sistema
// Para evitar erros em tempo de execussão, aplicamos o CORS no código, que é um mecanismo de segurança que bloqueia requisições em portas diferentes
// Para instalar o cors: 'npm install cors'

async function obterDados() {
    const URLCompleta = `${protocolo}${baseURL}${contatoEndpoint}`;
    const data = (await axios.get(URLCompleta)).data
    console.log(data);

    let corpoPrincipal = document.querySelector('.corpo-principal');
    // para limpar possíveis dados indesejados do corpo principal
    corpoPrincipal.innerHTML = '';

    // let nome = corpoPrincipal.getElementsByClassName('paragrafo-nome')
    // for (let dado of dados) {
    //     let dadoNome = nome.insert
    // }
    
    // Seleciona os elementos que exibem o primeiro item da lista de dados
    let nomeElem = document.querySelector('.paragrafo-nome');
    let emailElem = document.querySelector('.paragrafo-email');
    let mensagemElem = document.querySelector('.paragrafo-mensagem');

    for (let dado of dados) {
        // Cria elementos para cada dado
        nomeElem.textContent = `Nome: ${dado.nome}`;
        emailElem.textContent = `Email: ${dado.email}`;
        mensagemElem.textContent = `Mensagem: ${dado.mensagem}`;

        // Adiciona os elementos ao corpo principal
        corpoPrincipal.appendChild(nomeElem);
        corpoPrincipal.appendChild(emailElem);
        corpoPrincipal.appendChild(mensagemElem);
    }
}

obterDados();