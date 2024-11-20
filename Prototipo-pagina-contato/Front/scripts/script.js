const protocolo = 'http://'
const baseURL = 'localhost:3000'
// const contatoEndpoint = '/contato'

// Ao criar uma função assíncrona para obter dados nesse script, associarmos o script para o arquivo HTML e ao index.JS, estamos fazendo a primeira 'integração' entre o front e o back desse sistema
// Para evitar erros em tempo de execussão, aplicamos o CORS no código, que é um mecanismo de segurança que bloqueia requisições em portas diferentes
// Para instalar o cors: 'npm install cors'

async function obterDados() {
    const contatoEndpoint = '/contato'
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
    const contatoEndpoint = '/contato'
    const URLCompleta = `${protocolo}${baseURL}${contatoEndpoint}`;

    //pega os inputs dos dados inseridos pelo usuário
    let nomeInput = document.querySelector('#nomeInput');
    let emailInput = document.querySelector('#emailInput');
    let mensagemInput = document.querySelector('#mensagemInput');
    //pega os valores digitados pelo usuário
    let nome = nomeInput.value;
    let email = emailInput.value;
    let mensagem = mensagemInput.value;
    //envia os dados coletador pro back
    const dados = (await axios.post(URLCompleta, { nome, email, mensagem })).data
    //limpa os campos que o usuário digitou
    nome = ''
    email = ''
    mensagem = ''

    let principal = document.querySelector('#principal');
    principal.innerHTML = '';
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

async function cadastrarUsuario() {
    let usuarioCadastroInput =
        document.querySelector('#usuarioCadastroInput')
    let passwordCadastroInput =
        document.querySelector('#passwordCadastroInput')
    let usuarioCadastro = usuarioCadastroInput.value
    let passwordCadastro = passwordCadastroInput.value
    if (usuarioCadastro && passwordCadastro) {
        try {
            const cadastroEndpoint = '/signup'
            const URLCompleta = `${protocolo}${baseURL}${cadastroEndpoint}`
            await axios.post(URLCompleta, { login: usuarioCadastro, password: passwordCadastro })
            // limpar os iputs 
            usuarioCadastroInput.value = ''
            passwordCadastroInput.value = ''
            // modal de alerta:
            let alert = document.querySelector('.alert-modal-cadastro')
            alert.innerHTML = "Usuário cadastrado com sucesso!"
            //alert-success significa que o alerta é verde para esse tema
            alert.classList.add('show', 'alert-success')
            //alert-danger significa que o alerta é vermelho para esse tema
            alert.classList.remove('d-none', 'alert-danger')
            setTimeout(() => {
                alert.classList.remove('show')
                alert.classList.add('d-none')
                let modalCadastro = bootstrap.Modal.getInstance(document.querySelector('#modalCadastro'))
                modalCadastro.hide()
            }, 2000)
        }
        catch (error) {
            let alert = document.querySelector('.alert-modal-cadastro')
            alert.innerHTML = "Não foi possível cadastrar"
            alert.classList.add('show', 'alert-danger')
            alert.classList.remove('d-none', 'alert-success')
            setTimeout(() => {
                alert.classList.remove('show')
                alert.classList.add('d-none')
                let modalCadastro = bootstrap.Modal.getInstance(document.querySelector('#modalCadastro'))
                modalCadastro.hide()
            }, 2000)
        }
    }
    else {
        let alert = document.querySelector('.alert-modal-cadastro')
        alert.innerHTML = "Preencha todos os campos"
        alert.classList.add('show', 'alert-danger')
        alert.classList.remove('d-none')
        setTimeout(() => {
            alert.classList.remove('show')
            alert.classList.add('d-none')
        }, 2000)
    }
}

//esse construção é análoga a
//async function fazerLogin(){}
//há algumas diferenças, mas não vamos entrar em detalhes agora
const fazerLogin = async () => {
    let usuarioLoginInput = document.querySelector('#usuarioLoginInput')
    let passwordLoginInput = document.querySelector('#passwordLoginInput')
    let usuarioLogin = usuarioLoginInput.value
    let passwordLogin = passwordLoginInput.value
    if (usuarioLogin && passwordLogin) {
        try {
            const loginEndpoint = '/login'
            const URLCompleta = `${protocolo}${baseURL}${loginEndpoint}`
            //já já vamos fazer algo com a resposta (pegar o token)
            const response = await axios.post(
                URLCompleta,
                { login: usuarioLogin, password: passwordLogin }
            )
            console.log(response.data)
            usuarioLoginInput.value = ""
            passwordLoginInput.value = ""
            // modal de alerta:
            let alert = document.querySelector('.alert-modal-login')
            alert.innerHTML = "Usuário cadastrado com sucesso!"
            //alert-success significa que o alerta é verde para esse tema
            alert.classList.add('show', 'alert-success')
            //alert-danger significa que o alerta é vermelho para esse tema
            alert.classList.remove('d-none', 'alert-danger')
            setTimeout(() => {
                alert.classList.remove('show')
                alert.classList.add('d-none')
                let modalCadastro = bootstrap.Modal.getInstance(document.querySelector('#modalLogin'))
                modalCadastro.hide()
            }, 2000)
            const loginLink = document.querySelector('#loginLink')
            loginLink.innerHTML = "Logout"
            const cadastrarFilmeButton =
                document.querySelector('#enviarButton')
            cadastrarFilmeButton.disabled = false
        }
        catch (error) {
            let alert = document.querySelector('.alert-modal-login')
            alert.innerHTML = "Não foi possível cadastrar"
            alert.classList.add('show', 'alert-danger')
            alert.classList.remove('d-none', 'alert-success')
            setTimeout(() => {
                alert.classList.remove('show')
                alert.classList.add('d-none')
                let modalCadastro = bootstrap.Modal.getInstance(document.querySelector('#modalLogin'))
                modalCadastro.hide()
            }, 2000)
        }
    }
    else {
        let alert = document.querySelector('.alert-modal-login')
        alert.innerHTML = "Preencha todos os campos"
        alert.classList.add('show', 'alert-danger')
        alert.classList.remove('d-none')
        setTimeout(() => {
            alert.classList.remove('show')
            alert.classList.add('d-none')
        }, 2000)
    }
}