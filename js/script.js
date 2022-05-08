var mapa = {
  a:"ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat"
}
var mapa2 = {
  ai: "a",
  enter: "e",
  imes: "i",
  ober: "o",
  ufat: "u"
}

function encriptar(){
  let palabraACodificar = document.getElementById("texto").value
  if(palabraACodificar != ""){
    let palabraCodificada = palabraACodificar.replace(/a|e|i|o|u/g, function(mapeado){ return mapa[mapeado]})

    document.getElementById("resultado").innerHTML = palabraCodificada
    mostrarBoton()
  } 
}

function desencriptar(){
  let palabraCodificada = document.getElementById("texto").value

  if(palabraCodificada != ""){
    let palabraDecodificada = palabraCodificada.replace(/ai|enter|imes|ober|ufat/g, function(mapeado){ return mapa2[mapeado]})

    document.getElementById("resultado").innerHTML = palabraDecodificada
    mostrarBoton()
  }
}

function mostrarBoton(){
  document.getElementById("resultado").style.cssText = "background: none"
  document.getElementById("copiar").removeAttribute("hidden")
  document.getElementById("textarea2").style.cssText = "justify-content: space-between";
}

function clickCopiar(){
  var copia = document.getElementById("resultado").value

  navigator.clipboard.writeText(copia)

  alert("Texto copiado: " + copia)

}
function soloMinuscula(textarea){
  let caracteres = /[^a-z," ",ñ]/g
  textarea.value = textarea.value.replace(caracteres, "").toLowerCase()
}
