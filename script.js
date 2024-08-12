const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar (textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.Style.backgroundImage = "none"
}

function copiarTextoAlPortapapeles(texto) {
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    alert(`Texto copiado al portapapeles: ${mensaje.value}`);
    mensaje.value = "";
} 


function btndesEncriptar(){
    const textodesEncriptado = desencriptar (textArea.value)
    mensaje.value = textodesEncriptado
    textArea.value = "";
  
}

function encriptar(stringEncrptada){
    let matrizCodigo = [["e", "enter"],["i", "imes"], ["a" , "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncrptada = stringEncrptada.toLowerCase()
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncrptada.includes(matrizCodigo[i][0])){
            stringEncrptada = stringEncrptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }

    }
    return stringEncrptada
}

function desencriptar(stringdesEncrptada){
    let matrizCodigo = [["e", "enter"],["i", "imes"], ["a" , "ai"], ["o", "ober"], ["u", "ufat"]];
    stringdesEncrptada = stringdesEncrptada.toLowerCase()
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringdesEncrptada.includes(matrizCodigo[i][1])){
            stringdesEncrptada = stringdesEncrptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

        }

    }
    return stringdesEncrptada
}

// ojo esto esta sin terminar
function copiarTexto() {
    let texto = document.getElementById("resultado");
            texto.select();
            texto.setSelectionRange(0, 99999); // Para dispositivos móviles
            document.execCommand("copy");

            alert("Texto copiado: " + texto.value);
}



