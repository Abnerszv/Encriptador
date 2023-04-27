
texto = document.querySelector("#textInput");

function Encriptar() {
    let texto = document.getElementById("textInput").value.toLowerCase();

    var msj = texto.replace(/e/gm,"enter");
    var msj = texto.replace(/o/gm,"ober");
    var msj = texto.replace(/i/gm,"imes");
    var msj = texto.replace(/a/gm,"ai");
    var msj = texto.replace(/u/gm,"ufat");
    document.querySelector("#destino").value=msj;
}