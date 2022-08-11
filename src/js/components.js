import '../css/styles2.css'
import webPackLogo from "../assets/img/webpack-logo.png";

export const saludar = ( nombre = 'No name' ) => {
    
    const h1Tag = document.createElement('h1');
    h1Tag.innerText = `Hola ${ nombre }`
    document.body.append(h1Tag);

    //Img
    const img = document.createElement('img');
    img.src= webPackLogo;
    document.body.append(img);
}