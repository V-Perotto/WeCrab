$(document).ready(function(){
        
    $("#btnCadastro").click(function(){
        verificaName();
        verificaSurname();
        verificaEmail();
        verificaSenha();
        verificaTelefone();
        cadastrar();
    });

});

function verificaName() {
    
    var name = $("#txtName").val();

    if (name != "") {
        $("#txtName").removeClass("campo-obrigatorio");
        $("#txtName").addClass("campo-correto");
    }
    
    else if (name == "") {
        $("#txtName").removeClass("campo-correto");
        $("#txtName").addClass("campo-obrigatorio");
    }
}

function verificaSurname() {

    var surname = $("#txtSurname").val();
    
    if (surname != "") {
        $("#txtSurname").removeClass("campo-obrigatorio");
        $("#txtSurname").addClass("campo-correto");
    }

    else if (surname == "") {
        $("#txtSurname").removeClass("campo-correto");
        $("#txtSurname").addClass("campo-obrigatorio");
    }

}

function verificaEmail() {

    var email = $("#txtEmail").val();
    
    if (email != "") {
        $("#txtEmail").removeClass("campo-obrigatorio");
        $("#txtEmail").addClass("campo-correto");
    }

    else if (email == "") {
        $("#txtEmail").removeClass("campo-correto");
        $("#txtEmail").addClass("campo-obrigatorio");
    }
}

function verificaSenha() {

    var senha = $("#txtSenha").val();
    
    if (senha != "") {
        $("#txtSenha").removeClass("campo-obrigatorio");
        $("#txtSenha").addClass("campo-correto");
    }

    else if (senha == "") {
        $("#txtSenha").removeClass("campo-correto");
        $("#txtSenha").addClass("campo-obrigatorio");
    }
}

function verificaTelefone() {
    var telefone = $("txtTelefone").val();

    if (telefone != "") {
        $("#txtTelefone").removeClass("campo-obrigatorio");
        $("#txtTelefone").addClass("campo-correto");
    }

    else if (telefone == "") {
        $("#txtTelefone").removeClass("campo-correto");
        $("#txtTelefone").addClass("campo-obrigatorio");
    }
}

function cadastrar() {

    var name = $("#txtName").val();
    var surname = $("#txtSurname").val();
    var email = $("#txtEmail").val();
    var senha = $("#txtSenha").val();
    var telefone = $("txtTelefone").val();

    if (name != "" && surname != "" && email != "" && senha != "" && telefone != "") {
        $("#txtName").removeClass("campo-obrigatorio");
        $("#txtSurname").removeClass("campo-obrigatorio");
        $("#txtEmail").removeClass("campo-obrigatorio");
        $("#txtSenha").removeClass("campo-obrigatorio");
        $("txtTelefone").removeClass("campo-obrigatorio");

        $("#txtName").removeClass("campo-correto");
        $("#txtSurname").removeClass("campo-correto");
        $("#txtEmail").removeClass("campo-correto");
        $("#txtSenha").removeClass("campo-correto");
        $("txtTelefone").removeClass("campo-correto");

        $("#txtName").val("");
        $("#txtSurname").val("");
        $("#txtEmail").val("");
        $("#txtSenha").val("");
        $("#txtTelefone").val("");

        $("#txtName").focus();
    }
}