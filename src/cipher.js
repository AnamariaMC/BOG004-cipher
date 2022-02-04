const cipher = {
  //   encode, decode
  encode (casillas, texto){
    if (typeof texto !== 'string' || texto.length === 0
    ){
        throw new TypeError("Por favor ingresa un texto o palabra");
    }
    /*else if (typeof casillas !== 'number' || casillas.length === 0
    ){
       throw new TypeError("Por favor ingresa un numero de casillas");
    }*/
      let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      casillas = (casillas % 26+26) % 26;
      return texto.replace(/[A-Z]/ig, c => letras[(letras.indexOf(c)+casillas)%26]);
  },

  decode (casillas, texto){
    if (typeof texto !== 'string' || texto.length === 0
    ){
        throw new TypeError("Por favor ingresa un texto o palabra");
    }
    
      let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      casillas = (casillas % 26-26) % 26;
      return texto.replace(/[A-Z]/ig, c => letras[(letras.indexOf(c)-casillas)%26]);
  }  
};
export default cipher;
