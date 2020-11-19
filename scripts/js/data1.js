
var ErrorCampo = false;

$(document).ready(function(){

	var valor = document.getElementById("valor").value;
	return (valor);
	cadastrarForm();

});

// onclick - button Cadastrar
function cadastrarForm(){

	$("#btnCadastro").click(function(){

		cadastrarForm("fNome");
		cadastrarForm("fSobrenome");
		cadastrarForm("fTelefone");
		cadastrarForm("fEmail");
		cadastrarForm("fSenha");
		cadastrarForm("fSenhaConfirmar");

		cadastrarForm();

		if(ErrorCampo == true) 
		{
			alert("Cadastrado!");
			cadastrarForm();
		} 
		else (ErrorCampo == false) 
		{
			alert("Os campos em vermelho são obrigatórios!");
			cadastrarForm();
		}

	});

}

// Limpar campo e o foco é direcionado para o primeiro 
function limparForm(){
	
	$("fNome").val("");
	$("fSobrenome").val("");
	$("fTelefone").val("");
	$("fEmail").val("");
	$("fSenha").val("");
	$("fSenhaConfirmar").val("");

	$("fNome").focus();
}

// Validando todos os campos
function validarForm(idCampo){
	
	var nome = $("#fNome").val();
	var sobrenome = $("#fSobrenome").val();	
	var telefone = $("#fTelefone").val();
	var email = $("#fEmail").val();

	if(nome.value == "" || 
		nome.value == null ||
		nome.value.lenght <= 5){
		alert("Campo deve ser preenchido!");
		nome.focus();
		return false;
	}

	if(idCampo.sobrenome.value == "" || 
		idCampo.sobrenome.value == null){
		alert("Campo deve ser preenchido!");
		sobrenome.focus();
		return false;
	}

	if(idCampo.telefone.value == "" || 
		idCampo.telefone.value == null){
		alert("Campo deve ser preenchido!");
		telefone.focus();
		return false;
	}

	if(idCampo.email.value == "" || 
		email.value == null ||
		email.value.indexOf("@") == -1 ||
		email.valueOf.indexOf(".") == -1){
		alert("Campo deve ser preenchido!");
		email.focus();
		return false;
	}

}

// validando a senha FORTE
function validarSenha(){

	var senha = $("#fSenha").val();
	var confirmarsenha = $("#fConfirmasenha").val();

	if(senha != "") {
		if (senha != confirmarsenha){
			$("#fConfirmasenha").addClass("campo-formulario-erro");
			globalErroCampo = true;
		} else {
			$("#fConfirmasenha").removeClass("campo-formulario-erro");
		}
	}
}