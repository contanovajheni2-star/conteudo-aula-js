// Validação de Formulário



function validarForm() {
    let formulario = document.forms["novoForm"]["texto"].value;
    if (formulario == ""){
        alert("por favor, insira um valor para o campo!");
        return false;
    }
}