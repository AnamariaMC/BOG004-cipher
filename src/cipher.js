const cipher = {
  //   encode, decode
  encode (casillas, texto){
    if (!texto)
      return " ";
      let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      casillas = (casillas % 26+26) % 26;
      return texto.replace(/[A-Z]/ig, c => letras[(letras.indexOf(c)+casillas)%26]);
  },
  decode (casillas, texto){
    if (!texto)
      return "";
      let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      casillas = (casillas % 26-26) % 26;
      return texto.replace(/[A-Z]/ig, c => letras[(letras.indexOf(c)-casillas)%26]);
  }  
};
export default cipher;
