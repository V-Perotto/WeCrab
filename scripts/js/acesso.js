var logado = false;
var mostraAcesso = false;

if (localStorage.getItem("acesso") == "true") {
    logado = true;
    console.log('Entrou!');
};

if (logado != true) {
    alert("Voce nao esta autenticado!");
    window.location.href = "../pages/login.html";
}

function controlaAcesso() {
    mostraAcesso = !mostraAcesso;
    var form = document.getElementById("acessar");

    if (mostraAcesso) {
        form.style.display = "hidden";
    }
    else {
        form.style.display = "display";
    }
}