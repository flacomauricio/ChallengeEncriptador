const ingresoTexto = document.getElementById("ingresoTexto");
const botonEncriptar = document.getElementById("botonEncriptar");
const botonDesencriptar = document.getElementById("botonDesencriptar");
const botonCopiar = document.getElementById("botonCopiar");
const mensajeFinal = document.getElementById("mensajeFinal");
const muneco = document.getElementById("muneco");
const rightInfo = document.getElementById("rightInfo");
const right = document.getElementById("right");


// e - enter
// o - ober
// i - imes
// a - ai
// u - ufat

/* declaro un arreglo - con un arreglo dentro de otro arreglo*/

let remplazar = [
    
    ["e","enter"],
    ["o","ober"],
    ["i","imes"],
    ["a","ai"],
    ["u","ufat"]
];

const replace = (nuevoValor) => {

    mensajeFinal.innerHTML = nuevoValor;

    ingresoTexto.value ="";

    muneco.classList.add("oculto");
    
    rightInfo.style.display = "none";
    botonCopiar.style.display = "block";
    right.classList.add("ajustar");
    mensajeFinal.classList.add("ajustar");

}

const reset = () =>{
    mensajeFinal.innerHTML = "";
    muneco.classList.remove("oculto");
   
    rightInfo.style.display = "block";

    botonCopiar.style.display = "none";
    right.classList.remove("ajustar");
    mensajeFinal.classList.remove("ajustar");
    ingresoTexto.focus();
}


botonEncriptar.addEventListener("click", () => {

    const texto = ingresoTexto.value.toLowerCase();
    if (texto != ""){  
        function encriptar(newText){
           for (let i = 0; i < remplazar.length; i++){
             if (newText.includes(remplazar[i][0])){
                    newText = newText.replaceAll(remplazar[i][0],remplazar[i][1]);
                };

             };
         return newText;
         }

         replace(encriptar(texto));

       } else{
        alert("Ingrese un texto a encriptar");
        reset();
        
       };

    // const textoEncriptado = encriptar(texto);
    /* directamente elimino la constante pasando al msj el valor de retorno de la funcion*/
    
  //  replace(encriptar(texto));
    //mensajeFinal.innerHTML = encriptar(texto);

   
    /*console.log(encriptar(texto));
    console.log(textoEncriptado); */
});

botonDesencriptar.addEventListener("click", () => {
    const texto = ingresoTexto.value.toLowerCase();
    if (texto != ""){
  

        function desencriptar(newText){
           for (let i = 0; i < remplazar.length; i++){
               if (newText.includes(remplazar[i][1])){
                   newText = newText.replaceAll(remplazar[i][1],remplazar[i][0]);
               };
           };
           return newText;
       }

       replace(desencriptar(texto));

    } else {
        alert("Ingrese texto a Desencriptar");
        reset();
    }

   // const textoDesencriptado = desencriptar(texto);
    
 //   replace(desencriptar(texto));

} ) 


botonCopiar.addEventListener("click", ()=> {
    let texto = mensajeFinal;
    //navigator.clipboard.writeText(texto.value);
    /* por que no es compatible con telefono, por eso lo anulo */
    texto.select();
    document.execCommand('copy');
    alert("texto copiado");

    reset();
})


