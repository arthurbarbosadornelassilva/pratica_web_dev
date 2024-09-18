// Usando os recursos de JavaScript e DOM API
const imagem = document.querySelector("img");

imagem.onclick = () => {
    const mySrc = imagem.getAttribute("src");
    if (mySrc === "assets/Fbcarnewcover.jpg") {
        imagem.setAttribute("src", "assets/HD wallpaper_ Speedhunters, car, depth of field, sunset, Toyota, Toyota Chaser.jpg")
    } else {
        imagem.setAttribute("src", "assets/Fbcarnewcover.jpg")
    }
}

/////////////////////////////////////////////////////
//Criação de mensagem personalizada para o usuário//

let button = document.querySelector("button");
let heading = document.querySelector("h1");

function setUserName () {
    const nome = prompt("Please enter your name.");
    localStorage.setItem("name", nome);
    heading.textContent = `Bem-Vindo novamente, ${nome}`;
}

button.onclick = () => {
    setUserName();
}