var dados = JSON.parse(localStorage.getItem('dados')) || [];

$(document).ready(function(){

    $("#btnGravar").click(function(){

        var nome = $("#txtNome").val();
        var sobrenome = $("#txtSobrenome").val();
        var email = $("#txtEmail").val();
        var senha = $("#txtSenha").val();
        var telefone = $("#txtTelefone").val();

        var aux = [];

        aux.push(email);
        aux.push(senha);
        aux.push(nome);
        aux.push(sobrenome);
        aux.push(telefone);

        dados.push(aux);
    });

});