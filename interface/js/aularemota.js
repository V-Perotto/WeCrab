function validarFormulario() {
    var nome = document.forms["pesquisa"]["txtPesquisa"].value;
    if (nome == "") {
      alert("Pesquisar...");
      return false;
    }
  }
