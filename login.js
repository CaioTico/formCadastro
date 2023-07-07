/* Código de validação de formulário de login */

function Validar() {
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;

    if (!email || !senha) {
        alert("Campos de preenchimento obrigatório. Favor preecher!");
    } else {
        alert("Campos preenchidos com sucesso!");
    }
}