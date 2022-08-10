

export const saludar = ( nombre ) => {
    console.log('creando etiqueta h1');
    console.log('probando hot reload');

    const h1Tag = document.createElement('h1');
    h1Tag.innerText = `Hola ${ nombre }`
    document.body.append(h1Tag);
}