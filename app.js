// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigoSecreto = [];

function agregarAmigoSecreto() {
    let nombre = document.getElementById("nombre").value;
    if (nombre) {
        amigoSecreto.push(nombre);
        document.getElementById("nombre").value = "";
        mostrarAmigos();
    } else {
        alert("Por favor, ingresa un nombre.");
    } else {
        nombre.push(nombre);
        document.querySelector("#nombre").value = "";
        mostrarAmigos();
    }
}

