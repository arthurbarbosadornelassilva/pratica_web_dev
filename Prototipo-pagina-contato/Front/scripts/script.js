const protocolo = 'http://'
const baseURL = 'localhost:3000'
const contatoEndpoint = 'contato'

async function obterDados() {
    const URLCompleta = `${protocolo}${baseURL}${contatoEndpoint}`
    const data = (await axios.get(URLCompleta).data)
    console.log(data)
}