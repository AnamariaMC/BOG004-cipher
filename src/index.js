
import cipher from './cipher.js';
console.log(cipher);

function botones(){
    document.getElementById("mensajeIngresado").addEventListener("keyup", function(){
        this.value = this.value.toUpperCase();//Cualquier texto ingresado se pone en mayusculas
    });
    document.getElementById("cifrar").addEventListener("click", function(){
        let texto = document.getElementById("mensajeIngresado"). value;
        let casillas= document.getElementById("casillas").value;
        console.log(document.getElementById("mensajeDescifrado"));
        document.getElementById("mensajeDescifrado").value = cipher.encode(casillas, texto)
    });
   
    document.getElementById("descifrar").addEventListener("click", function(){
        let texto = document.getElementById("mensajeIngresado"). value;
        let casillas= document.getElementById("casillas").value;
        console.log(document.getElementById("mensajeDescifrado"));
        document.getElementById("mensajeDescifrado").value = cipher.decode(casillas, texto)
    });
}
botones();

console.log(cipher);


 