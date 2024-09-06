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