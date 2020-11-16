var globalErroCampo = false;

$(document).ready(function(){

	fLocalEventosClick();

});

// Evento Clicar
function fLocalEventosClick(){

	$("#bCadastrar").click(function(){
		
		fLocalValidaCampos("fNome");
		fLocalValidaCampos("fSobrenome");
		fLocalValidaCampos("fTelefone");
		fLocalValidaCampos("fEmail");
		fLocalValidaCampos("fSenha");
		fLocalValidaCampos("fConfirmarsenha");

		fLocalValidaSenha();

		if(globalErroCampo == false){
			alert("Salvo com sucesso!");
			fLocalValidaCampos();
		} else {
			alert("Os campos em vermelho são obritórios!");
		}
	});
}

// Limpa os campos e o foco vai para o primeiro campo
function fLocalLimpaCampos(){
	$("fNome").val("");
	$("fSobrenome").val("");
	$("fTelefone").val("");
	$("fEmail").val("");
	$("fSenha").val("");
	$("fConfirmasenha").val("");
	$("fNome").focus();
}

// Validando todos os campos
function fLocalValidaCampos(idCampo){
	
	var valor = $("#" + idCampo).val();
	
	if(valor == ""){
		$("#" + idCampo).addClass("campo-formulario-erro");
		globalErroCampo = true;
	} else {
		$("#" + idCampo).removeClass("campo-formulario-erro");
	}
}


// Validar os campos senhas
function fLocalValidaSenha(){
	
	var senha = $("#fSenha").val();
	var confirmarsenha = $("#fConfirmarSenha").val();

	if(senha != "") {
		if (senha != confirmarsenha){
			$("#fConfirmasenha").addClass("campo-formulario-erro");
			globalErroCampo = true;
		} else {
			$("#fConfirmasenha").removeClass("campo-formulario-erro");
		}
	}
}

// Evento Login Entrar
function fEntrar(){

	$("#bEntrar").click(function(){
		
		fLocalValidaCampos("fEmail");
		fLocalValidaCampos("fSenha");

	});
}

// Limpa os campos e o foco vai para o primeiro campo
function fLocalLimpaCampos(){

	$("fEmail").val("");
	$("fSenha").val("");
	$("fEmail").focus();

}